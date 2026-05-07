import React, { useState } from 'react';

const CodeSampleTabs = () => {
  const [activeTab, setActiveTab] = useState('python');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    console.log("GA Event: tab_click", { tab_name: tab, section: 'enforcement_gate' });
  };

  const codeSnippets = {
    python: `import biassense
from biassense.middleware import BiasGate

# Initialize the client
client = biassense.Client(api_key="your_api_key")

# Configure the enforcement gate
gate = BiasGate(
    thresholds={
        "disparate_impact": 0.8,
        "statistical_parity": 0.1
    },
    action="block" # "warn" or "block"
)

@gate.enforce
def predict_loan_approval(model, features):
    # If the model prediction violates thresholds based on the 
    # historical batch context, it will raise a BiasViolationError
    # before returning the prediction to the user.
    return model.predict(features)`,
    
    curl: `curl -X POST https://api.biassense.com/v1/enforce \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_id": "m_12345",
    "predictions": [1, 0, 1, 1],
    "protected_attributes": {
      "race": ["black", "white", "black", "hispanic"]
    },
    "thresholds": {
      "disparate_impact": 0.8
    }
  }'`
  };

  return (
    <div style={{
      background: '#0F172A',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
      width: '100%'
    }}>
      {/* Header Tabs */}
      <div style={{
        display: 'flex',
        background: '#1E293B',
        borderBottom: '1px solid #334155'
      }}>
        <button
          onClick={() => handleTabChange('python')}
          style={{
            background: activeTab === 'python' ? '#0F172A' : 'transparent',
            color: activeTab === 'python' ? '#00A99D' : '#94A3B8',
            border: 'none',
            borderTop: activeTab === 'python' ? '2px solid #00A99D' : '2px solid transparent',
            padding: '12px 24px',
            fontSize: '14px',
            fontFamily: 'monospace',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          Python SDK
        </button>
        <button
          onClick={() => handleTabChange('curl')}
          style={{
            background: activeTab === 'curl' ? '#0F172A' : 'transparent',
            color: activeTab === 'curl' ? '#00A99D' : '#94A3B8',
            border: 'none',
            borderTop: activeTab === 'curl' ? '2px solid #00A99D' : '2px solid transparent',
            padding: '12px 24px',
            fontSize: '14px',
            fontFamily: 'monospace',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          cURL
        </button>
      </div>

      {/* Code Block */}
      <div style={{ padding: '24px', overflowX: 'auto' }}>
        <pre style={{ margin: 0 }}>
          <code style={{ 
            fontFamily: '"Fira Code", monospace', 
            fontSize: '14px', 
            color: '#E2E8F0',
            lineHeight: 1.6
          }}>
            {activeTab === 'python' ? (
              <span dangerouslySetInnerHTML={{ __html: codeSnippets.python.replace(/import|from|def|return/g, '<span style="color: #F472B6;">$&</span>').replace(/#.*/g, '<span style="color: #64748B;">$&</span>').replace(/"[^"]*"/g, '<span style="color: #34D399;">$&</span>') }} />
            ) : (
              <span dangerouslySetInnerHTML={{ __html: codeSnippets.curl.replace(/curl|-X|-H|-d/g, '<span style="color: #F472B6;">$&</span>').replace(/'[^']*'/g, '<span style="color: #34D399;">$&</span>').replace(/"[^"]*"/g, '<span style="color: #34D399;">$&</span>') }} />
            )}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSampleTabs;
