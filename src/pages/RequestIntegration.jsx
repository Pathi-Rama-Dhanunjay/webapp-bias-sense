import { motion } from 'framer-motion';
import { useState } from 'react';

const fieldStyle = {
  width: '100%',
  border: '1px solid #CBD5E1',
  borderRadius: '14px',
  padding: '12px 14px',
  fontSize: '14px',
  color: '#0F172A',
  outline: 'none',
  background: '#FFFFFF',
  boxSizing: 'border-box',
};

const labelStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 600,
  color: '#1E293B',
  marginBottom: '8px',
};

const majorIntegrations = [
  { name: 'Salesforce', website: 'https://www.salesforce.com' },
  { name: 'HubSpot', website: 'https://www.hubspot.com' },
  { name: 'Slack', website: 'https://slack.com' },
  { name: 'Microsoft Teams', website: 'https://www.microsoft.com/microsoft-teams' },
  { name: 'Zoom', website: 'https://zoom.us' },
  { name: 'Google Workspace', website: 'https://workspace.google.com' },
  { name: 'Notion', website: 'https://www.notion.so' },
  { name: 'Confluence', website: 'https://www.atlassian.com/software/confluence' },
  { name: 'Jira', website: 'https://www.atlassian.com/software/jira' },
  { name: 'Asana', website: 'https://asana.com' },
  { name: 'Trello', website: 'https://trello.com' },
  { name: 'Airtable', website: 'https://www.airtable.com' },
  { name: 'Stripe', website: 'https://stripe.com' },
  { name: 'PayPal', website: 'https://www.paypal.com' },
  { name: 'Shopify', website: 'https://www.shopify.com' },
  { name: 'WooCommerce', website: 'https://woocommerce.com' },
  { name: 'GitHub', website: 'https://github.com' },
  { name: 'GitLab', website: 'https://gitlab.com' },
  { name: 'Bitbucket', website: 'https://bitbucket.org' },
  { name: 'Jenkins', website: 'https://www.jenkins.io' },
  { name: 'Docker', website: 'https://www.docker.com' },
  { name: 'Kubernetes', website: 'https://kubernetes.io' },
  { name: 'Terraform', website: 'https://www.terraform.io' },
  { name: 'AWS', website: 'https://aws.amazon.com' },
  { name: 'Microsoft Azure', website: 'https://azure.microsoft.com' },
  { name: 'Google Cloud', website: 'https://cloud.google.com' },
  { name: 'Snowflake', website: 'https://www.snowflake.com' },
  { name: 'Databricks', website: 'https://www.databricks.com' },
  { name: 'BigQuery', website: 'https://cloud.google.com/bigquery' },
  { name: 'PostgreSQL', website: 'https://www.postgresql.org' },
  { name: 'MySQL', website: 'https://www.mysql.com' },
  { name: 'MongoDB', website: 'https://www.mongodb.com' },
  { name: 'Redis', website: 'https://redis.io' },
  { name: 'Kafka', website: 'https://kafka.apache.org' },
  { name: 'Tableau', website: 'https://www.tableau.com' },
  { name: 'Power BI', website: 'https://powerbi.microsoft.com' },
  { name: 'Looker', website: 'https://cloud.google.com/looker' },
  { name: 'Mailchimp', website: 'https://mailchimp.com' },
  { name: 'Twilio', website: 'https://www.twilio.com' },
  { name: 'Zendesk', website: 'https://www.zendesk.com' },
];

const countryCallingCodes = [
  { code: '+1', name: 'United States/Canada', flag: '🇺🇸' },
  { code: '+7', name: 'Russia', flag: '🇷🇺' },
  { code: '+20', name: 'Egypt', flag: '🇪🇬' },
  { code: '+27', name: 'South Africa', flag: '🇿🇦' },
  { code: '+30', name: 'Greece', flag: '🇬🇷' },
  { code: '+31', name: 'Netherlands', flag: '🇳🇱' },
  { code: '+32', name: 'Belgium', flag: '🇧🇪' },
  { code: '+33', name: 'France', flag: '🇫🇷' },
  { code: '+34', name: 'Spain', flag: '🇪🇸' },
  { code: '+39', name: 'Italy', flag: '🇮🇹' },
  { code: '+41', name: 'Switzerland', flag: '🇨🇭' },
  { code: '+43', name: 'Austria', flag: '🇦🇹' },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+45', name: 'Denmark', flag: '🇩🇰' },
  { code: '+46', name: 'Sweden', flag: '🇸🇪' },
  { code: '+47', name: 'Norway', flag: '🇳🇴' },
  { code: '+48', name: 'Poland', flag: '🇵🇱' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
  { code: '+51', name: 'Peru', flag: '🇵🇪' },
  { code: '+52', name: 'Mexico', flag: '🇲🇽' },
  { code: '+54', name: 'Argentina', flag: '🇦🇷' },
  { code: '+55', name: 'Brazil', flag: '🇧🇷' },
  { code: '+56', name: 'Chile', flag: '🇨🇱' },
  { code: '+57', name: 'Colombia', flag: '🇨🇴' },
  { code: '+60', name: 'Malaysia', flag: '🇲🇾' },
  { code: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: '+62', name: 'Indonesia', flag: '🇮🇩' },
  { code: '+63', name: 'Philippines', flag: '🇵🇭' },
  { code: '+64', name: 'New Zealand', flag: '🇳🇿' },
  { code: '+65', name: 'Singapore', flag: '🇸🇬' },
  { code: '+66', name: 'Thailand', flag: '🇹🇭' },
  { code: '+81', name: 'Japan', flag: '🇯🇵' },
  { code: '+82', name: 'South Korea', flag: '🇰🇷' },
  { code: '+84', name: 'Vietnam', flag: '🇻🇳' },
  { code: '+86', name: 'China', flag: '🇨🇳' },
  { code: '+90', name: 'Turkey', flag: '🇹🇷' },
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+92', name: 'Pakistan', flag: '🇵🇰' },
  { code: '+93', name: 'Afghanistan', flag: '🇦🇫' },
  { code: '+94', name: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+95', name: 'Myanmar', flag: '🇲🇲' },
  { code: '+98', name: 'Iran', flag: '🇮🇷' },
  { code: '+212', name: 'Morocco', flag: '🇲🇦' },
  { code: '+213', name: 'Algeria', flag: '🇩🇿' },
  { code: '+216', name: 'Tunisia', flag: '🇹🇳' },
  { code: '+218', name: 'Libya', flag: '🇱🇾' },
  { code: '+220', name: 'Gambia', flag: '🇬🇲' },
  { code: '+221', name: 'Senegal', flag: '🇸🇳' },
  { code: '+223', name: 'Mali', flag: '🇲🇱' },
  { code: '+225', name: 'Ivory Coast', flag: '🇨🇮' },
  { code: '+227', name: 'Niger', flag: '🇳🇪' },
  { code: '+228', name: 'Togo', flag: '🇹🇬' },
  { code: '+229', name: 'Benin', flag: '🇧🇯' },
  { code: '+230', name: 'Mauritius', flag: '🇲🇺' },
  { code: '+231', name: 'Liberia', flag: '🇱🇷' },
  { code: '+232', name: 'Sierra Leone', flag: '🇸🇱' },
  { code: '+233', name: 'Ghana', flag: '🇬🇭' },
  { code: '+234', name: 'Nigeria', flag: '🇳🇬' },
  { code: '+250', name: 'Rwanda', flag: '🇷🇼' },
  { code: '+251', name: 'Ethiopia', flag: '🇪🇹' },
  { code: '+254', name: 'Kenya', flag: '🇰🇪' },
  { code: '+255', name: 'Tanzania', flag: '🇹🇿' },
  { code: '+256', name: 'Uganda', flag: '🇺🇬' },
  { code: '+260', name: 'Zambia', flag: '🇿🇲' },
  { code: '+263', name: 'Zimbabwe', flag: '🇿🇼' },
  { code: '+264', name: 'Namibia', flag: '🇳🇦' },
  { code: '+267', name: 'Botswana', flag: '🇧🇼' },
  { code: '+268', name: 'Eswatini', flag: '🇸🇿' },
  { code: '+297', name: 'Aruba', flag: '🇦🇼' },
  { code: '+299', name: 'Greenland', flag: '🇬🇱' },
  { code: '+350', name: 'Gibraltar', flag: '🇬🇮' },
  { code: '+351', name: 'Portugal', flag: '🇵🇹' },
  { code: '+352', name: 'Luxembourg', flag: '🇱🇺' },
  { code: '+353', name: 'Ireland', flag: '🇮🇪' },
  { code: '+354', name: 'Iceland', flag: '🇮🇸' },
  { code: '+355', name: 'Albania', flag: '🇦🇱' },
  { code: '+356', name: 'Malta', flag: '🇲🇹' },
  { code: '+357', name: 'Cyprus', flag: '🇨🇾' },
  { code: '+358', name: 'Finland', flag: '🇫🇮' },
  { code: '+359', name: 'Bulgaria', flag: '🇧🇬' },
  { code: '+370', name: 'Lithuania', flag: '🇱🇹' },
  { code: '+371', name: 'Latvia', flag: '🇱🇻' },
  { code: '+372', name: 'Estonia', flag: '🇪🇪' },
  { code: '+373', name: 'Moldova', flag: '🇲🇩' },
  { code: '+374', name: 'Armenia', flag: '🇦🇲' },
  { code: '+375', name: 'Belarus', flag: '🇧🇾' },
  { code: '+376', name: 'Andorra', flag: '🇦🇩' },
  { code: '+377', name: 'Monaco', flag: '🇲🇨' },
  { code: '+380', name: 'Ukraine', flag: '🇺🇦' },
  { code: '+381', name: 'Serbia', flag: '🇷🇸' },
  { code: '+382', name: 'Montenegro', flag: '🇲🇪' },
  { code: '+383', name: 'Kosovo', flag: '🇽🇰' },
  { code: '+385', name: 'Croatia', flag: '🇭🇷' },
  { code: '+386', name: 'Slovenia', flag: '🇸🇮' },
  { code: '+387', name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
  { code: '+389', name: 'North Macedonia', flag: '🇲🇰' },
  { code: '+420', name: 'Czech Republic', flag: '🇨🇿' },
  { code: '+421', name: 'Slovakia', flag: '🇸🇰' },
  { code: '+423', name: 'Liechtenstein', flag: '🇱🇮' },
  { code: '+500', name: 'Falkland Islands', flag: '🇫🇰' },
  { code: '+501', name: 'Belize', flag: '🇧🇿' },
  { code: '+502', name: 'Guatemala', flag: '🇬🇹' },
  { code: '+503', name: 'El Salvador', flag: '🇸🇻' },
  { code: '+504', name: 'Honduras', flag: '🇭🇳' },
  { code: '+505', name: 'Nicaragua', flag: '🇳🇮' },
  { code: '+506', name: 'Costa Rica', flag: '🇨🇷' },
  { code: '+507', name: 'Panama', flag: '🇵🇦' },
  { code: '+509', name: 'Haiti', flag: '🇭🇹' },
  { code: '+591', name: 'Bolivia', flag: '🇧🇴' },
  { code: '+592', name: 'Guyana', flag: '🇬🇾' },
  { code: '+593', name: 'Ecuador', flag: '🇪🇨' },
  { code: '+595', name: 'Paraguay', flag: '🇵🇾' },
  { code: '+597', name: 'Suriname', flag: '🇸🇷' },
  { code: '+598', name: 'Uruguay', flag: '🇺🇾' },
  { code: '+670', name: 'Timor-Leste', flag: '🇹🇱' },
  { code: '+673', name: 'Brunei', flag: '🇧🇳' },
  { code: '+674', name: 'Nauru', flag: '🇳🇷' },
  { code: '+675', name: 'Papua New Guinea', flag: '🇵🇬' },
  { code: '+676', name: 'Tonga', flag: '🇹🇴' },
  { code: '+677', name: 'Solomon Islands', flag: '🇸🇧' },
  { code: '+678', name: 'Vanuatu', flag: '🇻🇺' },
  { code: '+679', name: 'Fiji', flag: '🇫🇯' },
  { code: '+680', name: 'Palau', flag: '🇵🇼' },
  { code: '+682', name: 'Cook Islands', flag: '🇨🇰' },
  { code: '+685', name: 'Samoa', flag: '🇼🇸' },
  { code: '+686', name: 'Kiribati', flag: '🇰🇮' },
  { code: '+687', name: 'New Caledonia', flag: '🇳🇨' },
  { code: '+688', name: 'Tuvalu', flag: '🇹🇻' },
  { code: '+689', name: 'French Polynesia', flag: '🇵🇫' },
  { code: '+691', name: 'Micronesia', flag: '🇫🇲' },
  { code: '+692', name: 'Marshall Islands', flag: '🇲🇭' },
  { code: '+850', name: 'North Korea', flag: '🇰🇵' },
  { code: '+852', name: 'Hong Kong', flag: '🇭🇰' },
  { code: '+853', name: 'Macau', flag: '🇲🇴' },
  { code: '+855', name: 'Cambodia', flag: '🇰🇭' },
  { code: '+856', name: 'Laos', flag: '🇱🇦' },
  { code: '+880', name: 'Bangladesh', flag: '🇧🇩' },
  { code: '+886', name: 'Taiwan', flag: '🇹🇼' },
  { code: '+960', name: 'Maldives', flag: '🇲🇻' },
  { code: '+961', name: 'Lebanon', flag: '🇱🇧' },
  { code: '+962', name: 'Jordan', flag: '🇯🇴' },
  { code: '+963', name: 'Syria', flag: '🇸🇾' },
  { code: '+964', name: 'Iraq', flag: '🇮🇶' },
  { code: '+965', name: 'Kuwait', flag: '🇰🇼' },
  { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+967', name: 'Yemen', flag: '🇾🇪' },
  { code: '+968', name: 'Oman', flag: '🇴🇲' },
  { code: '+970', name: 'Palestine', flag: '🇵🇸' },
  { code: '+971', name: 'UAE', flag: '🇦🇪' },
  { code: '+972', name: 'Israel', flag: '🇮🇱' },
  { code: '+973', name: 'Bahrain', flag: '🇧🇭' },
  { code: '+974', name: 'Qatar', flag: '🇶🇦' },
  { code: '+975', name: 'Bhutan', flag: '🇧🇹' },
  { code: '+976', name: 'Mongolia', flag: '🇲🇳' },
  { code: '+977', name: 'Nepal', flag: '🇳🇵' },
  { code: '+992', name: 'Tajikistan', flag: '🇹🇯' },
  { code: '+993', name: 'Turkmenistan', flag: '🇹🇲' },
  { code: '+994', name: 'Azerbaijan', flag: '🇦🇿' },
  { code: '+995', name: 'Georgia', flag: '🇬🇪' },
  { code: '+996', name: 'Kyrgyzstan', flag: '🇰🇬' },
  { code: '+998', name: 'Uzbekistan', flag: '🇺🇿' },
];

const RequestIntegration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactCode, setContactCode] = useState('+1');
  const [contactNumber, setContactNumber] = useState('');
  const [toolName, setToolName] = useState('');
  const [toolWebsite, setToolWebsite] = useState('');
  const [suggestNew, setSuggestNew] = useState(false);
  const [errors, setErrors] = useState({});
  const [isCountryMenuOpen, setIsCountryMenuOpen] = useState(false);
  const selectedCountry = countryCallingCodes.find((item) => item.code === contactCode) || countryCallingCodes[0];

  const toTwemojiFlagUrl = (flag) => {
    if (!flag) return '';
    const hex = Array.from(flag, (char) => char.codePointAt(0).toString(16)).join('-');
    return `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${hex}.svg`;
  };

  const isKnownTool = (nameValue) =>
    majorIntegrations.some((item) => item.name.toLowerCase() === nameValue.trim().toLowerCase());

  const onToolNameChange = (value) => {
    setToolName(value);
    const match = majorIntegrations.find((item) => item.name.toLowerCase() === value.trim().toLowerCase());
    if (match) {
      setToolWebsite(match.website);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    const known = isKnownTool(toolName);

    if (!name.trim()) nextErrors.name = 'Name is required.';

    if (!email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email.';
    }

    if (!contactNumber.trim()) {
      nextErrors.contact = 'Contact number is required.';
    }

    if (!toolName.trim()) {
      nextErrors.toolName = 'Tool name is required.';
    }

    if (!known && !toolWebsite.trim()) {
      nextErrors.toolWebsite = 'Please add the tool website for tools not in the list.';
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      style={{ minHeight: '100vh', background: '#F8FAFC', padding: '96px 20px 56px' }}
    >
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '26px' }}>
          <span
            style={{
              display: 'inline-block',
              borderRadius: '999px',
              padding: '8px 14px',
              background: '#FEF3C7',
              color: '#B45309',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: '14px',
            }}
          >
            Request Integration
          </span>
          <h1 style={{ margin: '0 0 12px', fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.08, color: '#0B1B43' }}>
            Don&apos;t See Your Tool?
          </h1>
          <p style={{ margin: 0, color: '#334155', fontSize: 'clamp(14px, 1.6vw, 18px)', lineHeight: 1.5 }}>
            We&apos;re always adding new integrations. Let us know what you need and we&apos;ll prioritize it.
          </p>
        </div>

        <div style={{ background: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: '22px', padding: '26px' }}>
          <form onSubmit={onSubmit}>
            <div style={{ marginBottom: '18px' }}>
              <label htmlFor="name" style={labelStyle}>Name</label>
              <input id="name" type="text" placeholder="Your full name" style={fieldStyle} value={name} onChange={(e) => setName(e.target.value)} />
              {errors.name ? <p style={{ margin: '6px 0 0', fontSize: '12px', color: '#DC2626' }}>{errors.name}</p> : null}
            </div>

            <div style={{ marginBottom: '18px' }}>
              <label htmlFor="location" style={labelStyle}>Location</label>
              <input id="location" type="text" placeholder="City, Country" style={fieldStyle} />
            </div>

            <div style={{ marginBottom: '18px' }}>
              <label htmlFor="email" style={labelStyle}>Your Email</label>
              <input id="email" type="email" placeholder="you@company.com" style={fieldStyle} value={email} onChange={(e) => setEmail(e.target.value)} />
              {errors.email ? <p style={{ margin: '6px 0 0', fontSize: '12px', color: '#DC2626' }}>{errors.email}</p> : null}
            </div>

            <div style={{ marginBottom: '18px' }}>
              <label htmlFor="contact" style={labelStyle}>Contact</label>
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '8px' }}>
                <div style={{ position: 'relative' }}>
                  <button
                    id="country-code"
                    type="button"
                    onClick={() => setIsCountryMenuOpen((prev) => !prev)}
                    style={{
                      ...fieldStyle,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px',
                      cursor: 'pointer',
                    }}
                    aria-haspopup="listbox"
                    aria-expanded={isCountryMenuOpen}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                      <img
                        src={toTwemojiFlagUrl(selectedCountry.flag)}
                        alt=""
                        aria-hidden="true"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        style={{ width: '18px', height: '18px', flexShrink: 0 }}
                      />
                      <span style={{ fontSize: '14px', color: '#0F172A' }}>{selectedCountry.code}</span>
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      style={{
                        color: '#64748B',
                        flexShrink: 0,
                        transform: isCountryMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {isCountryMenuOpen ? (
                    <div
                      role="listbox"
                      style={{
                        position: 'absolute',
                        zIndex: 20,
                        top: 'calc(100% + 6px)',
                        left: 0,
                        right: 0,
                        background: '#FFFFFF',
                        border: '1px solid #CBD5E1',
                        borderRadius: '12px',
                        maxHeight: '220px',
                        overflowY: 'auto',
                        boxShadow: '0 10px 24px rgba(15, 23, 42, 0.12)',
                      }}
                    >
                      {countryCallingCodes.map((item) => (
                        <button
                          key={`${item.code}-${item.name}`}
                          type="button"
                          onClick={() => {
                            setContactCode(item.code);
                            setIsCountryMenuOpen(false);
                          }}
                          style={{
                            width: '100%',
                            border: 'none',
                            background: item.code === contactCode ? '#EFF6FF' : '#FFFFFF',
                            borderBottom: '1px solid #F1F5F9',
                            padding: '10px 12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            textAlign: 'left',
                            cursor: 'pointer',
                          }}
                        >
                          <img
                            src={toTwemojiFlagUrl(item.flag)}
                            alt=""
                            aria-hidden="true"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                            style={{ width: '16px', height: '16px', flexShrink: 0 }}
                          />
                          <span style={{ fontSize: '13px', color: '#0F172A' }}>{item.code}</span>
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
                <input id="contact" type="tel" placeholder="Contact number" style={fieldStyle} value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
              </div>
              {errors.contact ? <p style={{ margin: '6px 0 0', fontSize: '12px', color: '#DC2626' }}>{errors.contact}</p> : null}
            </div>

            <div style={{ marginBottom: '18px' }}>
              <label htmlFor="tool-name" style={labelStyle}>Tool Name</label>
              <input
                id="tool-name"
                type="text"
                list="major-integrations"
                placeholder="e.g., Asana, Jira, Notion..."
                style={fieldStyle}
                value={toolName}
                onChange={(e) => onToolNameChange(e.target.value)}
              />
              <p style={{ margin: '6px 0 0', fontSize: '12px', color: '#64748B' }}>
                Tool not listed? Type the name manually and we&apos;ll still accept it.
              </p>
              {errors.toolName ? <p style={{ margin: '6px 0 0', fontSize: '12px', color: '#DC2626' }}>{errors.toolName}</p> : null}
              <datalist id="major-integrations">
                {majorIntegrations.map((item) => (
                  <option key={item.name} value={item.name} />
                ))}
              </datalist>
            </div>

            <div style={{ marginBottom: '18px' }}>
              <label htmlFor="tool-website" style={labelStyle}>Tool Website</label>
              <input
                id="tool-website"
                type="url"
                placeholder="https://..."
                style={fieldStyle}
                value={toolWebsite}
                onChange={(e) => setToolWebsite(e.target.value)}
              />
              {errors.toolWebsite ? <p style={{ margin: '6px 0 0', fontSize: '12px', color: '#DC2626' }}>{errors.toolWebsite}</p> : null}
            </div>

            <div style={{ marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input
                id="suggest-new-tool"
                type="checkbox"
                checked={suggestNew}
                onChange={(e) => setSuggestNew(e.target.checked)}
                style={{ width: '16px', height: '16px' }}
              />
              <label htmlFor="suggest-new-tool" style={{ fontSize: '13px', color: '#334155' }}>
                Suggest this as a new integration
              </label>
            </div>

            <div style={{ marginBottom: '18px' }}>
              <label htmlFor="use-case" style={labelStyle}>Use Case</label>
              <textarea id="use-case" rows={5} placeholder="How would you use this integration?" style={{ ...fieldStyle, resize: 'vertical' }} />
            </div>

            <button
              type="submit"
              style={{
                width: 'fit-content',
                minWidth: '220px',
                border: 'none',
                borderRadius: '14px',
                padding: '14px 16px',
                fontSize: '18px',
                fontWeight: 700,
                color: '#FFFFFF',
                background: 'linear-gradient(120deg, #0EA5E9 0%, #2563EB 45%, #7C3AED 100%)',
                cursor: 'pointer',
                display: 'block',
                margin: '6px auto 0',
                boxShadow: '0 10px 24px rgba(37, 99, 235, 0.35)',
              }}
            >
              Submit Request {'->'}
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default RequestIntegration;
