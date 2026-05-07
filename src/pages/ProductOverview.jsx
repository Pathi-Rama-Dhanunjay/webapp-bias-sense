import React from 'react';
import { motion } from 'framer-motion';
import ProductHero from '../components/Product/Sections/ProductHero';
import DataHealth from '../components/Product/Sections/DataHealth';
import BiasDetection from '../components/Product/Sections/BiasDetection';
import Explainability from '../components/Product/Sections/Explainability';
import EnforcementGate from '../components/Product/Sections/EnforcementGate';
import ProductionMonitoring from '../components/Product/Sections/ProductionMonitoring';
import OutputFormats from '../components/Product/Sections/OutputFormats';
import IntegrationPoints from '../components/Product/Sections/IntegrationPoints';
import FinalCTA from '../components/Product/Sections/FinalCTA';

const ProductOverview = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProductHero />
      <DataHealth />
      <BiasDetection />
      <Explainability />
      <EnforcementGate />
      <ProductionMonitoring />
      <OutputFormats />
      <IntegrationPoints />
      <FinalCTA />
    </motion.div>
  );
};

export default ProductOverview;
