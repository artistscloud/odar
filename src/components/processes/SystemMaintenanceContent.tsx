
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';

const SystemMaintenanceContent = () => {
  return (
    <div className="flex-1 glass-card p-6 overflow-auto">
      <div className="prose prose-odar max-w-none">
        <h2 className="text-2xl font-bold text-odar-blue mb-6">OdAR System - Comprehensive Maintenance Protocol</h2>

        <ScrollArea className="h-[600px] pr-4">
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">1. Introduction</h3>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">1.1 Purpose</h4>
              <p className="text-odar-gray-700">
                This document establishes standardized maintenance procedures for the OdAR (Olfactory Detection and Ranging) system 
                to ensure optimal performance, extend operational lifespan, and minimize downtime. Regular maintenance is essential 
                for preserving the system's detection accuracy, ranging precision, and overall reliability.
              </p>
            </div>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">1.2 Scope</h4>
              <p className="text-odar-gray-700">
                This maintenance protocol applies to all OdAR system units, including field-deployed devices and laboratory 
                reference units. It encompasses routine maintenance, calibration procedures, preventive measures, troubleshooting 
                guidelines, and component replacement protocols.
              </p>
            </div>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">1.3 Maintenance Philosophy</h4>
              <p className="text-odar-gray-700">
                The OdAR maintenance approach follows three core principles:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>Preventive</strong>: Regular scheduled maintenance to prevent failures</li>
                <li><strong>Predictive</strong>: Monitoring system parameters to anticipate maintenance needs</li>
                <li><strong>Corrective</strong>: Systematic resolution of identified issues</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">2. Maintenance Schedule</h3>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">2.1 Routine Maintenance Schedule</h4>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Interval</TableHead>
                      <TableHead>Maintenance Type</TableHead>
                      <TableHead>Personnel Required</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Daily</TableCell>
                      <TableCell>Basic operational check</TableCell>
                      <TableCell>Operator</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Weekly</TableCell>
                      <TableCell>Performance verification</TableCell>
                      <TableCell>Operator</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Monthly</TableCell>
                      <TableCell>Calibration verification</TableCell>
                      <TableCell>Technician</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Quarterly</TableCell>
                      <TableCell>Comprehensive maintenance</TableCell>
                      <TableCell>Certified technician</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Annually</TableCell>
                      <TableCell>Complete system overhaul</TableCell>
                      <TableCell>Service engineer</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">2.2 Daily Operational Checks (Operator)</h4>
              <div className="mb-2">
                <p className="font-medium">1. Power System:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Verify battery charge level (>50% for field deployment)</li>
                  <li>Check power indicators and warning lights</li>
                  <li>Ensure proper connection of external power supply (if applicable)</li>
                </ul>
              </div>
              
              <div className="mb-2">
                <p className="font-medium">2. Basic Functionality:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Verify system boot sequence completes without errors</li>
                  <li>Confirm display and controls are responsive</li>
                  <li>Check connectivity status (Wi-Fi, Bluetooth) if applicable</li>
                </ul>
              </div>
              
              <div className="mb-2">
                <p className="font-medium">3. Quick Sensor Check:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Verify baseline sensor readings in clean air environment</li>
                  <li>Confirm absence of sensor error indicators</li>
                  <li>Ensure sensor intake area is unobstructed</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">2.3 Weekly Performance Verification (Operator)</h4>
              <div className="mb-2">
                <p className="font-medium">1. Sensor Array Verification:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Perform quick-check calibration using reference compound</li>
                  <li>Verify sensor response times are within specifications</li>
                  <li>Document baseline drift from previous week</li>
                </ul>
              </div>
              
              <div className="mb-2">
                <p className="font-medium">2. Ranging System Check:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Verify distance measurements to fixed reference points</li>
                  <li>Check angular measurement accuracy with reference targets</li>
                  <li>Ensure all ultrasonic/ToF sensors are functional</li>
                </ul>
              </div>
              
              <div className="mb-2">
                <p className="font-medium">3. System Diagnostics:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Run built-in self-test routines</li>
                  <li>Document any warning conditions or error codes</li>
                  <li>Verify data logging function with sample capture</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">3. Sensor Maintenance Procedures</h3>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">3.1 MOS Sensor Maintenance</h4>
              <div className="mb-2">
                <p className="font-medium">1. Inspection Criteria:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Check for discoloration of sensing element</li>
                  <li>Inspect for contamination of sensor surface</li>
                  <li>Verify heater functionality through temperature cycle</li>
                </ul>
              </div>
              
              <div className="mb-2">
                <p className="font-medium">2. Cleaning Procedure:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Power down system completely</li>
                  <li>Remove sensor protective cap</li>
                  <li>Use dry, filtered compressed air (10-15 psi) to remove particulates</li>
                  <li>For persistent contamination, replace sensor module</li>
                </ul>
              </div>
              
              <div className="mb-2">
                <p className="font-medium">3. Lifespan and Replacement:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Expected service life: 18-24 months under normal conditions</li>
                  <li>Replace if baseline resistance has shifted >25% from initial value</li>
                  <li>Replace if temperature cycle performance shows degradation</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">3.2 Conductive Polymer Sensor Maintenance</h4>
              <div className="mb-2">
                <p className="font-medium">1. Inspection Criteria:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Check for physical degradation of polymer surface</li>
                  <li>Inspect for contamination or particulate buildup</li>
                  <li>Verify consistent electrical characteristics</li>
                </ul>
              </div>
              
              <div className="mb-2">
                <p className="font-medium">2. Maintenance Procedure:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Power down system completely</li>
                  <li>Use only dry air for cleaning (never use solvents)</li>
                  <li>Ensure environmental protection during maintenance</li>
                  <li>Allow 24-hour stabilization after maintenance</li>
                </ul>
              </div>
              
              <div className="mb-2">
                <p className="font-medium">3. Lifespan and Replacement:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Expected service life: 12-18 months under normal conditions</li>
                  <li>Replace if sensitivity has decreased >30% from baseline</li>
                  <li>Replace if recovery time has increased >50% from specification</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">4. Calibration Procedures</h3>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">4.1 Olfactory Sensor Calibration</h4>
              <div className="mb-2">
                <p className="font-medium">1. Equipment Required:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>OdAR Calibration Kit (P/N: ODR-CAL-KIT-01)</li>
                  <li>Certified reference compounds (ethanol, ethyl acetate, benzaldehyde, acetone)</li>
                  <li>Calibrated flow controller and dilution system</li>
                  <li>Temperature and humidity reference monitor</li>
                </ul>
              </div>
              
              <div className="mb-2">
                <p className="font-medium">2. Zero Calibration Procedure:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ensure system is in a clean air environment</li>
                  <li>Run self-zeroing procedure from maintenance menu</li>
                  <li>Verify baseline stability for minimum 5 minutes</li>
                  <li>Record baseline resistance values for all sensors</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">4.4 Calibration Frequency and Documentation</h4>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Component</TableHead>
                      <TableHead>Calibration Type</TableHead>
                      <TableHead>Frequency</TableHead>
                      <TableHead>Documentation Required</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>MOS Sensors</TableCell>
                      <TableCell>Zero & Span</TableCell>
                      <TableCell>Monthly</TableCell>
                      <TableCell>Calibration certificate with reference standards</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Polymer Sensors</TableCell>
                      <TableCell>Zero & Span</TableCell>
                      <TableCell>Monthly</TableCell>
                      <TableCell>Calibration certificate with reference standards</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Temperature Control</TableCell>
                      <TableCell>Full range</TableCell>
                      <TableCell>Quarterly</TableCell>
                      <TableCell>Temperature verification report</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Ultrasonic Ranging</TableCell>
                      <TableCell>Distance & Angular</TableCell>
                      <TableCell>Quarterly</TableCell>
                      <TableCell>Ranging verification report</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>ToF Sensing (if equipped)</TableCell>
                      <TableCell>Precision check</TableCell>
                      <TableCell>Quarterly</TableCell>
                      <TableCell>Optical ranging verification report</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Integrated System</TableCell>
                      <TableCell>Performance validation</TableCell>
                      <TableCell>Semi-annually</TableCell>
                      <TableCell>System performance certificate</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">5. Troubleshooting Procedures</h3>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">5.1 Diagnostic Tools and Resources</h4>
              <div className="mb-2">
                <p className="font-medium">1. Built-in Diagnostics:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Self-test routine (access via maintenance menu)</li>
                  <li>Sensor status report generator</li>
                  <li>Error code lookup and interpretation guide</li>
                  <li>Performance trend analysis tools</li>
                </ul>
              </div>
              
              <div className="mb-2">
                <p className="font-medium">2. External Diagnostic Equipment:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>OdAR Service Tool Kit (P/N: ODR-SRV-KIT-01)</li>
                  <li>Digital multimeter with temperature probe</li>
                  <li>USB diagnostic interface cable</li>
                  <li>OdAR Diagnostic Software Suite</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">5.2 Common Issues and Resolutions</h4>
              <p className="mb-2 font-medium">5.2.1 Olfactory Sensing System</p>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Symptom</TableHead>
                      <TableHead>Possible Causes</TableHead>
                      <TableHead>Troubleshooting Steps</TableHead>
                      <TableHead>Resolution</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>High baseline drift</TableCell>
                      <TableCell>Environmental contamination, Sensor aging, Temperature control issue</TableCell>
                      <TableCell>Check environmental conditions, Verify temperature control function, Run auto-zero routine</TableCell>
                      <TableCell>Clean sensor array, Replace sensors if beyond tolerance, Recalibrate system</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Poor detection accuracy</TableCell>
                      <TableCell>Calibration drift, Sensor contamination, Reference gas issues, Hardware failure</TableCell>
                      <TableCell>Run diagnostic self-test, Verify with reference compound, Check calibration date</TableCell>
                      <TableCell>Recalibrate system, Clean or replace sensors, Repair/replace hardware components</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">6. Component Replacement Guidelines</h3>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">6.1 Approved Replacement Parts</h4>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Component</TableHead>
                      <TableHead>Part Number</TableHead>
                      <TableHead>Replacement Interval</TableHead>
                      <TableHead>Compatibility Notes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>MOS Sensor Array</TableCell>
                      <TableCell>ODR-SNS-MOS-01</TableCell>
                      <TableCell>18-24 months</TableCell>
                      <TableCell>Compatible with all OdAR models</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Polymer Sensor Array</TableCell>
                      <TableCell>ODR-SNS-POL-01</TableCell>
                      <TableCell>12-18 months</TableCell>
                      <TableCell>Compatible with all OdAR models</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Main Battery Pack</TableCell>
                      <TableCell>ODR-PWR-BAT-01</TableCell>
                      <TableCell>2-3 years or 500 cycles</TableCell>
                      <TableCell>3.7V, 3000mAh Li-Ion</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">6.2 Sensor Replacement Procedure</h4>
              <div className="mb-2">
                <p className="font-medium">1. Preparation:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Power down system completely</li>
                  <li>Disconnect battery</li>
                  <li>Work in clean, static-free environment</li>
                  <li>Gather required tools and replacement parts</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">8. Technical Support Resources</h3>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">8.1 Support Tiers</h4>
              <div className="mb-2">
                <p className="font-medium">1. Tier 1: Operator Support</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Basic troubleshooting guidance</li>
                  <li>Routine maintenance assistance</li>
                  <li>Access via phone, email, or chat</li>
                  <li>Available 8 AM - 8 PM, Monday-Friday</li>
                </ul>
              </div>
              
              <div className="mb-2">
                <p className="font-medium">2. Tier 2: Technical Support</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Advanced troubleshooting</li>
                  <li>Component-level diagnostics</li>
                  <li>Remote diagnostics capability</li>
                  <li>Available 24/7 for critical issues</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">8.2 Contact Information</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Technical Support Hotline</strong>: +1-800-555-ODAR (6327)</li>
                <li><strong>Email Support</strong>: support@odarsystems.com</li>
                <li><strong>Online Support Portal</strong>: https://support.odarsystems.com</li>
                <li><strong>Emergency Support (24/7)</strong>: +1-800-555-6328</li>
              </ul>
            </div>
          </section>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">9. Health and Safety Guidelines</h3>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">9.1 Chemical Safety</h4>
              <div className="mb-2">
                <p className="font-medium">1. Handling Calibration Gases:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Always work in well-ventilated areas</li>
                  <li>Use appropriate personal protective equipment</li>
                  <li>Follow chemical safety data sheet recommendations</li>
                  <li>Store calibration materials according to regulations</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">9.2 Electrical Safety</h4>
              <div className="mb-2">
                <p className="font-medium">1. General Precautions:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Always disconnect power before opening enclosures</li>
                  <li>Use insulated tools for electrical work</li>
                  <li>Verify power is off before touching components</li>
                  <li>Follow lockout/tagout procedures when applicable</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">10. Appendices</h3>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">10.1 Maintenance Checklists</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Daily Operator Checklist</li>
                <li>Weekly Verification Checklist</li>
                <li>Monthly Maintenance Checklist</li>
                <li>Quarterly Comprehensive Checklist</li>
                <li>Annual Overhaul Checklist</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">10.2 Calibration Worksheets</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Olfactory Sensor Calibration Worksheet</li>
                <li>Ranging System Calibration Worksheet</li>
                <li>Temperature Control Calibration Worksheet</li>
                <li>Integrated System Calibration Worksheet</li>
              </ul>
            </div>
          </section>
        </ScrollArea>
      </div>
    </div>
  );
};

export default SystemMaintenanceContent;
