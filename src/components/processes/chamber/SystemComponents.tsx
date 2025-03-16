
import React from 'react';
import GasDeliverySystem from './GasDeliverySystem';
import EnvironmentalControl from './EnvironmentalControl';
import DataAcquisition from './DataAcquisition';
import RoboticSystem from './RoboticSystem';
import EmergencySystems from './EmergencySystems';
import TestingStations from './TestingStations';
import ReferenceInstruments from './ReferenceInstruments';
import RangingCalibration from './RangingCalibration';
import EntryAirlock from './EntryAirlock';

const SystemComponents = () => {
  return (
    <div>
      <h4 className="text-lg font-medium mt-6 mb-3">Systems and Components</h4>
      
      <GasDeliverySystem />
      <EnvironmentalControl />
      <DataAcquisition />
      <RoboticSystem />
      <EmergencySystems />
      <TestingStations />
      <ReferenceInstruments />
      <RangingCalibration />
      <EntryAirlock />
    </div>
  );
};

export default SystemComponents;
