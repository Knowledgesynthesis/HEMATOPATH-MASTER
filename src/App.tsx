import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { ModulePage } from '@/pages/ModulePage';
import { Cases } from '@/pages/Cases';
import { Assessment } from '@/pages/Assessment';
import { Interactives } from '@/pages/Interactives';
import { Settings } from '@/pages/Settings';
import { MarrowCellularityEstimator } from '@/components/interactives/MarrowCellularityEstimator';
import { DysplasiaDetector } from '@/components/interactives/DysplasiaDetector';
import { FlowClassifier } from '@/components/interactives/FlowClassifier';
import { PlasmaClonality } from '@/components/interactives/PlasmaClonality';
import { CytogeneticMatcher } from '@/components/interactives/CytogeneticMatcher';
import { LeukemiaPathway } from '@/components/interactives/LeukemiaPathway';
import { LymphNodeExplorer } from '@/components/interactives/LymphNodeExplorer';
import { IntegratedDiagnosis } from '@/components/interactives/IntegratedDiagnosis';
import { useThemeStore } from '@/store/themeStore';

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/module/:moduleId" element={<ModulePage />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/interactives" element={<Interactives />} />
          <Route path="/settings" element={<Settings />} />

          {/* Interactive Tools Routes */}
          <Route path="/interactive/marrow-cellularity" element={<MarrowCellularityEstimator />} />
          <Route path="/interactive/dysplasia-detector" element={<DysplasiaDetector />} />
          <Route path="/interactive/flow-classifier" element={<FlowClassifier />} />
          <Route path="/interactive/plasma-clonality" element={<PlasmaClonality />} />
          <Route path="/interactive/cytogenetics-matcher" element={<CytogeneticMatcher />} />
          <Route path="/interactive/leukemia-pathway" element={<LeukemiaPathway />} />
          <Route path="/interactive/lymph-node-explorer" element={<LymphNodeExplorer />} />
          <Route path="/interactive/integrated-diagnosis" element={<IntegratedDiagnosis />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
