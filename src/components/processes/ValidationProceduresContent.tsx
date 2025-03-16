
import React from 'react';

const ValidationProceduresContent = () => {
  return (
    <div className="flex-1 glass-card p-6 overflow-auto">
      <div className="prose prose-odar max-w-none">
        <h2 className="text-2xl font-bold text-odar-blue mb-6">OdAR System Validation Procedures</h2>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">6. Environmental Resilience Testing</h3>
        
        <h4 className="text-lg font-medium mt-6 mb-3">6.1 Temperature Variation</h4>
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
                <td className="border border-gray-300 px-4 py-2">ENV-01</td>
                <td className="border border-gray-300 px-4 py-2">Cold operation</td>
                <td className="border border-gray-300 px-4 py-2">Test at 0°C, 5°C, and 10°C</td>
                <td className="border border-gray-300 px-4 py-2">&lt;15% degradation in detection accuracy</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">ENV-02</td>
                <td className="border border-gray-300 px-4 py-2">Hot operation</td>
                <td className="border border-gray-300 px-4 py-2">Test at 30°C, 35°C, and 40°C</td>
                <td className="border border-gray-300 px-4 py-2">&lt;10% degradation in detection accuracy</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">ENV-03</td>
                <td className="border border-gray-300 px-4 py-2">Temperature cycling</td>
                <td className="border border-gray-300 px-4 py-2">Ramp temperature 10°C→40°C→10°C during operation</td>
                <td className="border border-gray-300 px-4 py-2">System remains operational with &lt;20% accuracy variation</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">ENV-04</td>
                <td className="border border-gray-300 px-4 py-2">Thermal stabilization</td>
                <td className="border border-gray-300 px-4 py-2">Monitor performance during chamber heating/cooling</td>
                <td className="border border-gray-300 px-4 py-2">Self-calibration maintains performance through transition</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h4 className="text-lg font-medium mt-6 mb-3">6.2 Humidity Variation</h4>
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
                <td className="border border-gray-300 px-4 py-2">HUM-01</td>
                <td className="border border-gray-300 px-4 py-2">Low humidity</td>
                <td className="border border-gray-300 px-4 py-2">Test at 20% RH</td>
                <td className="border border-gray-300 px-4 py-2">&lt;10% degradation in system performance</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">HUM-02</td>
                <td className="border border-gray-300 px-4 py-2">High humidity</td>
                <td className="border border-gray-300 px-4 py-2">Test at 80% RH</td>
                <td className="border border-gray-300 px-4 py-2">&lt;15% degradation in system performance</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">HUM-03</td>
                <td className="border border-gray-300 px-4 py-2">Humidity cycling</td>
                <td className="border border-gray-300 px-4 py-2">Ramp 30%→70%→30% RH during operation</td>
                <td className="border border-gray-300 px-4 py-2">System remains operational with &lt;15% accuracy variation</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">HUM-04</td>
                <td className="border border-gray-300 px-4 py-2">Condensation resistance</td>
                <td className="border border-gray-300 px-4 py-2">Test at dew point conditions</td>
                <td className="border border-gray-300 px-4 py-2">No system failures; returns to normal operation after conditions normalize</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">7. Power Management Testing</h3>
        
        <h4 className="text-lg font-medium mt-6 mb-3">7.1 Battery Life Assessment</h4>
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
                <td className="border border-gray-300 px-4 py-2">PWR-01</td>
                <td className="border border-gray-300 px-4 py-2">Standby duration</td>
                <td className="border border-gray-300 px-4 py-2">Measure time until shutdown in standby mode</td>
                <td className="border border-gray-300 px-4 py-2">&gt;72 hours on full charge</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">PWR-02</td>
                <td className="border border-gray-300 px-4 py-2">Active sensing duration</td>
                <td className="border border-gray-300 px-4 py-2">Measure time until shutdown during continuous operation</td>
                <td className="border border-gray-300 px-4 py-2">&gt;6 hours on full charge</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">PWR-03</td>
                <td className="border border-gray-300 px-4 py-2">Duty-cycled operation</td>
                <td className="border border-gray-300 px-4 py-2">1 minute active / 5 minutes standby cycles</td>
                <td className="border border-gray-300 px-4 py-2">&gt;24 hours operation on full charge</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">PWR-04</td>
                <td className="border border-gray-300 px-4 py-2">Power draw profile</td>
                <td className="border border-gray-300 px-4 py-2">Measure current during different operational modes</td>
                <td className="border border-gray-300 px-4 py-2">Matches or beats specifications in design documents</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h4 className="text-lg font-medium mt-6 mb-3">7.2 Power Management Functionality</h4>
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
                <td className="border border-gray-300 px-4 py-2">PWRMG-01</td>
                <td className="border border-gray-300 px-4 py-2">Low battery operation</td>
                <td className="border border-gray-300 px-4 py-2">Test performance at 15% battery level</td>
                <td className="border border-gray-300 px-4 py-2">Graceful degradation, alerts user</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">PWRMG-02</td>
                <td className="border border-gray-300 px-4 py-2">Power saving modes</td>
                <td className="border border-gray-300 px-4 py-2">Verify all power saving features activate correctly</td>
                <td className="border border-gray-300 px-4 py-2">Features activate at appropriate thresholds</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">PWRMG-03</td>
                <td className="border border-gray-300 px-4 py-2">Charging performance</td>
                <td className="border border-gray-300 px-4 py-2">Measure charging time and curve</td>
                <td className="border border-gray-300 px-4 py-2">Full charge in &lt;4 hours, follows expected curve</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">PWRMG-04</td>
                <td className="border border-gray-300 px-4 py-2">Thermal management</td>
                <td className="border border-gray-300 px-4 py-2">Monitor temperature during intensive operation</td>
                <td className="border border-gray-300 px-4 py-2">Internal temperature remains &lt;45°C</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">8. Durability and Reliability Testing</h3>
        
        <h4 className="text-lg font-medium mt-6 mb-3">8.1 Long-Term Operation</h4>
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
                <td className="border border-gray-300 px-4 py-2">DUR-01</td>
                <td className="border border-gray-300 px-4 py-2">24-hour continuous operation</td>
                <td className="border border-gray-300 px-4 py-2">Run system for 24 hours with periodic exposures</td>
                <td className="border border-gray-300 px-4 py-2">&lt;5% degradation in performance over test period</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">DUR-02</td>
                <td className="border border-gray-300 px-4 py-2">7-day intermittent operation</td>
                <td className="border border-gray-300 px-4 py-2">Daily usage cycles over 7-day period</td>
                <td className="border border-gray-300 px-4 py-2">System maintains performance specifications</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">DUR-03</td>
                <td className="border border-gray-300 px-4 py-2">Sensor drift assessment</td>
                <td className="border border-gray-300 px-4 py-2">Monitor baseline readings over 30 days</td>
                <td className="border border-gray-300 px-4 py-2">Drift &lt;5% from initial calibration</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">DUR-04</td>
                <td className="border border-gray-300 px-4 py-2">Memory usage stability</td>
                <td className="border border-gray-300 px-4 py-2">Monitor RAM and flash usage during extended operation</td>
                <td className="border border-gray-300 px-4 py-2">No memory leaks or degradation in response time</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h4 className="text-lg font-medium mt-6 mb-3">8.2 Environmental Stress Testing</h4>
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
                <td className="border border-gray-300 px-4 py-2">STRESS-01</td>
                <td className="border border-gray-300 px-4 py-2">Drop test</td>
                <td className="border border-gray-300 px-4 py-2">1.0m drop onto concrete surface</td>
                <td className="border border-gray-300 px-4 py-2">No component failures, maintains accuracy</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">STRESS-02</td>
                <td className="border border-gray-300 px-4 py-2">Vibration test</td>
                <td className="border border-gray-300 px-4 py-2">10-100 Hz sweep, 15 minutes per axis</td>
                <td className="border border-gray-300 px-4 py-2">No loose components, maintains calibration</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">STRESS-03</td>
                <td className="border border-gray-300 px-4 py-2">Water resistance</td>
                <td className="border border-gray-300 px-4 py-2">Spray testing per IP65 standard</td>
                <td className="border border-gray-300 px-4 py-2">No water ingress, system remains operational</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">STRESS-04</td>
                <td className="border border-gray-300 px-4 py-2">Dust exposure</td>
                <td className="border border-gray-300 px-4 py-2">Dust chamber exposure per IP65 standard</td>
                <td className="border border-gray-300 px-4 py-2">No dust ingress, sensor performance maintained</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">9. Test Result Documentation</h3>
        
        <h4 className="text-lg font-medium mt-6 mb-3">9.1 Required Test Metrics</h4>
        <p>For each test, the following data will be recorded:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Test ID and description</li>
          <li>Environmental conditions</li>
          <li>Equipment setup and configuration</li>
          <li>Raw measurement data</li>
          <li>Statistical analysis (mean, standard deviation, error rates)</li>
          <li>Observations and anomalies</li>
          <li>Pass/fail determination</li>
        </ul>
        
        <h4 className="text-lg font-medium mt-6 mb-3">9.2 Performance Summary Dashboard</h4>
        <p>A consolidated dashboard will be created to visualize:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Overall detection accuracy by compound and concentration</li>
          <li>Ranging accuracy at different distances and angles</li>
          <li>Environmental performance matrix</li>
          <li>Power consumption profile</li>
          <li>System reliability metrics</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">10. Testing Schedule and Resources</h3>
        
        <h4 className="text-lg font-medium mt-6 mb-3">10.1 Test Sequence and Dependencies</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Phase</th>
                <th className="border border-gray-300 px-4 py-2">Description</th>
                <th className="border border-gray-300 px-4 py-2">Duration</th>
                <th className="border border-gray-300 px-4 py-2">Prerequisites</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">Setup and calibration</td>
                <td className="border border-gray-300 px-4 py-2">3 days</td>
                <td className="border border-gray-300 px-4 py-2">Test chamber preparation, reference instrument calibration</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">Olfactory testing</td>
                <td className="border border-gray-300 px-4 py-2">5 days</td>
                <td className="border border-gray-300 px-4 py-2">Completion of Phase 1</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">Ranging testing</td>
                <td className="border border-gray-300 px-4 py-2">4 days</td>
                <td className="border border-gray-300 px-4 py-2">Completion of Phase 1</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">4</td>
                <td className="border border-gray-300 px-4 py-2">Integrated testing</td>
                <td className="border border-gray-300 px-4 py-2">7 days</td>
                <td className="border border-gray-300 px-4 py-2">Completion of Phases 2 and 3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">5</td>
                <td className="border border-gray-300 px-4 py-2">Environmental testing</td>
                <td className="border border-gray-300 px-4 py-2">10 days</td>
                <td className="border border-gray-300 px-4 py-2">Completion of Phase 4</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">6</td>
                <td className="border border-gray-300 px-4 py-2">Long-term reliability</td>
                <td className="border border-gray-300 px-4 py-2">30 days</td>
                <td className="border border-gray-300 px-4 py-2">Completion of Phase 4</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h4 className="text-lg font-medium mt-6 mb-3">10.2 Required Equipment and Resources</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Calibrated gas delivery system with certified reference standards</li>
          <li>PID analyzer and multi-gas analyzer for reference measurements</li>
          <li>Environmental chamber with temperature and humidity control</li>
          <li>XYZ robotic positioning system</li>
          <li>Data acquisition system with minimum 100 Hz sampling rate</li>
          <li>Battery life testing station with logging capability</li>
          <li>Multiple OdAR test units (minimum 3)</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">11. Expected Test Results</h3>
        
        <h4 className="text-lg font-medium mt-6 mb-3">11.1 Olfactory Performance</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Classification accuracy: 88-92% under optimal conditions</li>
          <li>Concentration estimation error: ±8-12 ppm</li>
          <li>Response time: 1.5-2.5 seconds for initial detection</li>
          <li>Recovery time: 45-75 seconds after high concentration exposure</li>
        </ul>
        
        <h4 className="text-lg font-medium mt-6 mb-3">11.2 Ranging Performance</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Static distance accuracy: ±8-12 cm at distances up to 3m</li>
          <li>Angular accuracy: ±10-15° for source direction</li>
          <li>Dynamic tracking accuracy: ±18-25 cm for sources moving at up to 0.5 m/s</li>
        </ul>
        
        <h4 className="text-lg font-medium mt-6 mb-3">11.3 Environmental Resilience</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Temperature operating range: 5-40°C with &lt;15% performance degradation</li>
          <li>Humidity operating range: 20-80% RH with &lt;15% performance degradation</li>
          <li>Sensor drift: &lt;3% per week with static environment</li>
        </ul>
        
        <h4 className="text-lg font-medium mt-6 mb-3">11.4 Power Performance</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Battery life: 6-8 hours continuous operation</li>
          <li>Standby time: 60-80 hours</li>
          <li>Charging time: 3-4 hours from 10% to 90%</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">12. Test Results Reporting Template</h3>
        
        <h4 className="text-lg font-medium mt-6 mb-3">12.1 Executive Summary</h4>
        <div className="bg-gray-50 p-4 border rounded-md font-mono text-sm">
          Test Period: [START_DATE] to [END_DATE]<br />
          Overall Status: [PASS/CONDITIONAL PASS/FAIL]<br />
          Key Findings:<br />
          - [SUMMARY_POINT_1]<br />
          - [SUMMARY_POINT_2]<br />
          - [SUMMARY_POINT_3]
        </div>
        
        <h4 className="text-lg font-medium mt-6 mb-3">12.2 Detailed Test Results</h4>
        <div className="bg-gray-50 p-4 border rounded-md font-mono text-sm">
          Test ID: [TEST_ID]<br />
          Description: [TEST_DESCRIPTION]<br />
          Date Performed: [TEST_DATE]<br />
          Environmental Conditions: [TEMP, HUMIDITY, PRESSURE]<br />
          Test Equipment: [EQUIPMENT_LIST]<br />
          <br />
          Raw Results:<br />
          [TABLE_OF_RAW_RESULTS]<br />
          <br />
          Statistical Analysis:<br />
          - Mean: [MEAN_VALUE]<br />
          - Standard Deviation: [STD_DEV]<br />
          - Error Rate: [ERROR_RATE]<br />
          <br />
          Observations:<br />
          [OBSERVATIONS_TEXT]<br />
          <br />
          Pass/Fail Status: [PASS/FAIL]<br />
          Notes: [ADDITIONAL_NOTES]
        </div>
        
        <h4 className="text-lg font-medium mt-6 mb-3">12.3 Issue Tracking</h4>
        <div className="bg-gray-50 p-4 border rounded-md font-mono text-sm">
          Issue ID: [ISSUE_ID]<br />
          Related Test(s): [TEST_IDS]<br />
          Description: [ISSUE_DESCRIPTION]<br />
          Severity: [HIGH/MEDIUM/LOW]<br />
          Impact: [IMPACT_DESCRIPTION]<br />
          Recommended Action: [RECOMMENDATION]<br />
          Status: [OPEN/IN PROGRESS/RESOLVED]
        </div>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">13. Appendices</h3>
        
        <h4 className="text-lg font-medium mt-6 mb-3">13.1 Reference Standards</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Temperature and humidity references traceable to NIST standards</li>
          <li>Gas concentration standards with certificates of analysis</li>
          <li>Distance measurement references with calibration certificates</li>
        </ul>
        
        <h4 className="text-lg font-medium mt-6 mb-3">13.2 Test Equipment Calibration Records</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Calibration dates and certificates for all measurement equipment</li>
          <li>Pre-test and post-test calibration verification results</li>
        </ul>
        
        <h4 className="text-lg font-medium mt-6 mb-3">13.3 Testing Chamber Validation Records</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Chamber characterization data</li>
          <li>Environmental stability verification results</li>
          <li>Cross-contamination prevention validation</li>
        </ul>
      </div>
    </div>
  );
};

export default ValidationProceduresContent;
