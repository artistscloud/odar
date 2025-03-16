
import React from 'react';

const DataAnalysisContent = () => {
  return (
    <div className="flex-1 glass-card p-6 overflow-auto">
      <div className="prose prose-odar max-w-none">
        <h2 className="text-2xl font-bold text-odar-blue mb-6">OdAR System Data Analysis Methodology</h2>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">1. Testing Objectives</h3>
        <p>
          The integration testing protocol aims to validate the complete functionality of the OdAR system with particular emphasis on:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Olfactory detection accuracy across target compounds</li>
          <li>Spatial ranging precision and reliability</li>
          <li>Combined olfactory-ranging performance</li>
          <li>Environmental resilience and system stability</li>
          <li>Power management and operational longevity</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">2. Testing Environment Specifications</h3>
        
        <h4 className="text-lg font-medium mt-6 mb-3">2.1 Testing Chamber Configuration</h4>
        <p>
          Based on the blueprint documentation, testing will be conducted in a 5.0m × 5.0m controlled chamber with:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Entry airlock system for contamination prevention</li>
          <li>XYZ robotic positioning system with 4m × 4m movement area</li>
          <li>Gas delivery system with multiple calibrated release points</li>
          <li>Environmental control system (temperature, humidity)</li>
          <li>Monitoring stations with reference instrumentation</li>
        </ul>
        
        <h4 className="text-lg font-medium mt-6 mb-3">2.2 Environmental Control Parameters</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Parameter</th>
                <th className="border border-gray-300 px-4 py-2">Test Range</th>
                <th className="border border-gray-300 px-4 py-2">Control Precision</th>
                <th className="border border-gray-300 px-4 py-2">Stabilization Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Temperature</td>
                <td className="border border-gray-300 px-4 py-2">0°C to 40°C</td>
                <td className="border border-gray-300 px-4 py-2">±0.5°C</td>
                <td className="border border-gray-300 px-4 py-2">30 minutes</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Humidity</td>
                <td className="border border-gray-300 px-4 py-2">20% to 80% RH</td>
                <td className="border border-gray-300 px-4 py-2">±2% RH</td>
                <td className="border border-gray-300 px-4 py-2">45 minutes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Airflow</td>
                <td className="border border-gray-300 px-4 py-2">0.1 to 1.0 m/s</td>
                <td className="border border-gray-300 px-4 py-2">±0.05 m/s</td>
                <td className="border border-gray-300 px-4 py-2">15 minutes</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Background VOCs</td>
                <td className="border border-gray-300 px-4 py-2">&lt;0.1 ppm total</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">60 minutes purge</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">3. Olfactory Detection Validation</h3>
        
        <h4 className="text-lg font-medium mt-6 mb-3">3.1 Compound Classification Testing</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Test ID</th>
                <th className="border border-gray-300 px-4 py-2">Description</th>
                <th className="border border-gray-300 px-4 py-2">Methodology</th>
                <th className="border border-gray-300 px-4 py-2">Success Criteria</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">OLF-01</td>
                <td className="border border-gray-300 px-4 py-2">Single compound identification</td>
                <td className="border border-gray-300 px-4 py-2">Expose system to each target compound individually at 100 ppm</td>
                <td className="border border-gray-300 px-4 py-2">≥90% correct identification across 10 trials</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">OLF-02</td>
                <td className="border border-gray-300 px-4 py-2">Concentration variation</td>
                <td className="border border-gray-300 px-4 py-2">Test each compound at 50, 100, and 200 ppm</td>
                <td className="border border-gray-300 px-4 py-2">≥85% correct identification with concentration estimate within ±15%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">OLF-03</td>
                <td className="border border-gray-300 px-4 py-2">Multiple compound discrimination</td>
                <td className="border border-gray-300 px-4 py-2">Present two different compounds from separate release points</td>
                <td className="border border-gray-300 px-4 py-2">≥80% correct identification of both compounds</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">OLF-04</td>
                <td className="border border-gray-300 px-4 py-2">Background interference</td>
                <td className="border border-gray-300 px-4 py-2">Test with background VOCs present at 1 ppm</td>
                <td className="border border-gray-300 px-4 py-2">&lt;10% reduction in identification accuracy</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h4 className="text-lg font-medium mt-6 mb-3">3.2 Concentration Quantification Testing</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Test ID</th>
                <th className="border border-gray-300 px-4 py-2">Description</th>
                <th className="border border-gray-300 px-4 py-2">Methodology</th>
                <th className="border border-gray-300 px-4 py-2">Success Criteria</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">CONC-01</td>
                <td className="border border-gray-300 px-4 py-2">Accuracy evaluation</td>
                <td className="border border-gray-300 px-4 py-2">Compare OdAR reading with reference PID instrument</td>
                <td className="border border-gray-300 px-4 py-2">Mean absolute error &lt;10 ppm</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">CONC-02</td>
                <td className="border border-gray-300 px-4 py-2">Linearity assessment</td>
                <td className="border border-gray-300 px-4 py-2">Measure response to 10-200 ppm in 10 ppm increments</td>
                <td className="border border-gray-300 px-4 py-2">R² &gt; 0.90 between actual and measured values</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">CONC-03</td>
                <td className="border border-gray-300 px-4 py-2">Limit of detection</td>
                <td className="border border-gray-300 px-4 py-2">Decreasing concentrations until no detection</td>
                <td className="border border-gray-300 px-4 py-2">Reliable detection at ≤5 ppm</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">CONC-04</td>
                <td className="border border-gray-300 px-4 py-2">Time to detection</td>
                <td className="border border-gray-300 px-4 py-2">Measure time from release to first valid reading</td>
                <td className="border border-gray-300 px-4 py-2">&lt;3 seconds at 100 ppm</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">4. Ranging System Validation</h3>
        
        <h4 className="text-lg font-medium mt-6 mb-3">4.1 Static Distance Measurement</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Test ID</th>
                <th className="border border-gray-300 px-4 py-2">Description</th>
                <th className="border border-gray-300 px-4 py-2">Methodology</th>
                <th className="border border-gray-300 px-4 py-2">Success Criteria</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">RNG-01</td>
                <td className="border border-gray-300 px-4 py-2">Short-range accuracy</td>
                <td className="border border-gray-300 px-4 py-2">Fixed measurements at 0.5, 1.0, and 1.5 meters</td>
                <td className="border border-gray-300 px-4 py-2">Mean error &lt;±10 cm</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">RNG-02</td>
                <td className="border border-gray-300 px-4 py-2">Long-range accuracy</td>
                <td className="border border-gray-300 px-4 py-2">Fixed measurements at 2.0, 3.0, and 4.0 meters</td>
                <td className="border border-gray-300 px-4 py-2">Mean error &lt;±20 cm</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">RNG-03</td>
                <td className="border border-gray-300 px-4 py-2">Angular accuracy</td>
                <td className="border border-gray-300 px-4 py-2">Measurements at 0°, 45°, 90°, 135°, 180° at 2m distance</td>
                <td className="border border-gray-300 px-4 py-2">Angular error &lt;±15°</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">RNG-04</td>
                <td className="border border-gray-300 px-4 py-2">Surface material variation</td>
                <td className="border border-gray-300 px-4 py-2">Test with wood, metal, fabric, and glass at 2m</td>
                <td className="border border-gray-300 px-4 py-2">Consistent performance across materials (deviation &lt;15%)</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h4 className="text-lg font-medium mt-6 mb-3">4.2 Dynamic Tracking Testing</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Test ID</th>
                <th className="border border-gray-300 px-4 py-2">Description</th>
                <th className="border border-gray-300 px-4 py-2">Methodology</th>
                <th className="border border-gray-300 px-4 py-2">Success Criteria</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">DYN-01</td>
                <td className="border border-gray-300 px-4 py-2">Linear tracking</td>
                <td className="border border-gray-300 px-4 py-2">Track target moving at 0.5 m/s in straight line</td>
                <td className="border border-gray-300 px-4 py-2">Position error &lt;±25 cm throughout trajectory</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">DYN-02</td>
                <td className="border border-gray-300 px-4 py-2">Angular tracking</td>
                <td className="border border-gray-300 px-4 py-2">Track target moving in 90° arc at 0.3 m/s</td>
                <td className="border border-gray-300 px-4 py-2">Position error &lt;±30 cm throughout trajectory</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">DYN-03</td>
                <td className="border border-gray-300 px-4 py-2">Speed variation</td>
                <td className="border border-gray-300 px-4 py-2">Track targets at 0.1, 0.3, and 0.5 m/s</td>
                <td className="border border-gray-300 px-4 py-2">Consistent tracking at all speeds</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">DYN-04</td>
                <td className="border border-gray-300 px-4 py-2">Path reconstruction</td>
                <td className="border border-gray-300 px-4 py-2">Compare measured path to actual robot path</td>
                <td className="border border-gray-300 px-4 py-2">Path similarity score &gt;85%</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">5. Integrated System Performance</h3>
        
        <h4 className="text-lg font-medium mt-6 mb-3">5.1 Combined Detection and Ranging</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Test ID</th>
                <th className="border border-gray-300 px-4 py-2">Description</th>
                <th className="border border-gray-300 px-4 py-2">Methodology</th>
                <th className="border border-gray-300 px-4 py-2">Success Criteria</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">INT-01</td>
                <td className="border border-gray-300 px-4 py-2">Single source localization</td>
                <td className="border border-gray-300 px-4 py-2">Identify and locate single odor source</td>
                <td className="border border-gray-300 px-4 py-2">Correct compound ID with position error &lt;±25 cm</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">INT-02</td>
                <td className="border border-gray-300 px-4 py-2">Multiple source discrimination</td>
                <td className="border border-gray-300 px-4 py-2">Identify and locate two different odor sources</td>
                <td className="border border-gray-300 px-4 py-2">Correct identification of both compounds with position error &lt;±35 cm</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">INT-03</td>
                <td className="border border-gray-300 px-4 py-2">Concentration gradient mapping</td>
                <td className="border border-gray-300 px-4 py-2">Create 3D concentration map of chamber</td>
                <td className="border border-gray-300 px-4 py-2">Gradient direction accuracy &gt;85% compared to reference measurements</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">INT-04</td>
                <td className="border border-gray-300 px-4 py-2">Moving source tracking</td>
                <td className="border border-gray-300 px-4 py-2">Track odor source moving at 0.3 m/s</td>
                <td className="border border-gray-300 px-4 py-2">Continuous tracking with mean position error &lt;±40 cm</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h4 className="text-lg font-medium mt-6 mb-3">5.2 System Response Time</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Test ID</th>
                <th className="border border-gray-300 px-4 py-2">Description</th>
                <th className="border border-gray-300 px-4 py-2">Methodology</th>
                <th className="border border-gray-300 px-4 py-2">Success Criteria</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">RESP-01</td>
                <td className="border border-gray-300 px-4 py-2">Time to first detection</td>
                <td className="border border-gray-300 px-4 py-2">Measure time from release to first alert</td>
                <td className="border border-gray-300 px-4 py-2">&lt;2 seconds at 100 ppm</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">RESP-02</td>
                <td className="border border-gray-300 px-4 py-2">Time to accurate classification</td>
                <td className="border border-gray-300 px-4 py-2">Measure time to correct compound ID</td>
                <td className="border border-gray-300 px-4 py-2">&lt;5 seconds at 100 ppm</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">RESP-03</td>
                <td className="border border-gray-300 px-4 py-2">Time to source localization</td>
                <td className="border border-gray-300 px-4 py-2">Measure time to accurate position fix</td>
                <td className="border border-gray-300 px-4 py-2">&lt;8 seconds at 100 ppm</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">RESP-04</td>
                <td className="border border-gray-300 px-4 py-2">Recovery time</td>
                <td className="border border-gray-300 px-4 py-2">Measure time to reset after exposure</td>
                <td className="border border-gray-300 px-4 py-2">&lt;60 seconds after 200 ppm exposure</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataAnalysisContent;
