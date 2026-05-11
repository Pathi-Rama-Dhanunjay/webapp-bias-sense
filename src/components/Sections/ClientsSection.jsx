import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
    'TechCorp',
    'Innovate Inc.',
    'Data Solutions',
    'QuantumLeap',
    'NextGen AI',
    'Synergy Systems',
];

const ClientsSection = () => {
    // Wave animation settings to ensure the duplicated array loops seamlessly
    const waveDuration = 4;

    // Cool gradients to apply to each client name
    const clientGradients = [
        'linear-gradient(90deg, #2DD4BF, #3B82F6)', // Teal to Blue
        'linear-gradient(90deg, #8B5CF6, #EC4899)', // Purple to Pink
        'linear-gradient(90deg, #FBBF24, #F97316)', // Amber to Orange
        'linear-gradient(90deg, #34D399, #10B981)', // Green to Emerald
        'linear-gradient(90deg, #60A5FA, #4F46E5)', // Blue to Indigo
        'linear-gradient(90deg, #FB7185, #E11D48)', // Rose to Red
    ];

    return (
        <section style={{ padding: '6px 24px 19px', backgroundColor: 'transparent', overflow: 'hidden' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                >
                    <h4 style={{
                        textAlign: 'center',
                        color: '#64748B',
                        fontWeight: 600,
                        fontSize: '16px',
                        marginBottom: '32px',
                        letterSpacing: '0.5px'
                    }}>
                        TRUSTED BY THE WORLD'S MOST INNOVATIVE COMPANIES
                    </h4>
                    <div style={{
                        position: 'relative',
                        display: 'flex',
                        overflow: 'hidden',
                        userSelect: 'none',
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    }}>
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                ease: "linear",
                                duration: 30,
                                repeat: Infinity,
                            }}
                            style={{
                                display: 'flex',
                                whiteSpace: 'nowrap',
                                gap: 'clamp(48px, 8vw, 100px)',
                                paddingRight: 'clamp(48px, 8vw, 100px)',
                                alignItems: 'center',
                                opacity: 0.9,
                            }}
                        >
                            {[...clientLogos, ...clientLogos].map((client, idx) => (
                                <motion.div
                                    key={`${client}-${idx}`}
                                    animate={{ y: [-8, 8, -8] }}
                                    transition={{
                                        duration: waveDuration,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: idx * (waveDuration / clientLogos.length)
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    style={{
                                        fontSize: 'clamp(20px, 2.5vw, 24px)',
                                        fontWeight: 700,
                                        background: clientGradients[idx % clientLogos.length],
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        letterSpacing: '1px',
                                        cursor: 'default',
                                    }}
                                >
                                    {client}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ClientsSection;