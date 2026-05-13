import { useView } from '../../../context/ViewContext';

const ViewToggle = () => {
  const { view, setView } = useView();

  return (
    <div style={{
      gap: '4px',
      justifyContent: 'center',
      marginBottom: '48px',
      background: 'rgba(255, 255, 255, 0.5)',
      padding: '4px',
      borderRadius: '8px',
      border: '1px solid #E2E8F0',
      display: 'inline-flex'
    }}>
      <button
        onClick={() => setView('executive')}
        style={{
          padding: '8px 16px',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: 500,
          background: view === 'executive' ? '#0F4C8C' : 'transparent',
          color: view === 'executive' ? 'white' : '#64748B',
          border: view === 'executive' ? '1px solid #0F4C8C' : '1px solid transparent',
          transition: 'all 0.2s',
          cursor: 'pointer'
        }}
      >
        Executive View
      </button>
      <button
        onClick={() => setView('technical')}
        style={{
          padding: '8px 16px',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: 500,
          background: view === 'technical' ? '#0F4C8C' : 'transparent',
          color: view === 'technical' ? 'white' : '#64748B',
          border: view === 'technical' ? '1px solid #0F4C8C' : '1px solid transparent',
          transition: 'all 0.2s',
          cursor: 'pointer'
        }}
      >
        Technical View
      </button>
    </div>
  );
};

export default ViewToggle;
