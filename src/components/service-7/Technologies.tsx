import React from 'react';
import Marquee from "react-fast-marquee";

const ScrollingAppsShowcase: React.FC = () => {
  const row1Apps = [
    { name: 'ARM Cortex' },
    { name: 'PIC' },
    { name: 'AVR' },
    { name: 'ESP32' },
    { name: 'STM32' },
    { name: 'TI' },
    { name: 'NXP' },
    { name: 'Renesas' },
    { name: 'Azure IoT Hub' },
    { name: 'Google IoT Core' },
    { name: 'MQTT brokers' },
  ];

  const row2Apps = [
    { name: 'C' },
    { name: 'C++' },
    { name: 'Embedded C' },
    { name: 'Python' },
    { name: 'Rust (for embedded)' },
    { name: 'FreeRTOS' },
    { name: 'Zephyr' },
    { name: 'Embedded Linux' },
    { name: 'Bare-metal systems' },
    { name: 'Logic analyzers' },
    { name: 'Oscilloscopes' },
    { name: 'AWS IoT' },
  ];

  const row3Apps = [
    { name: 'SPI' },
    { name: 'I2C' },
    { name: 'UART' },
    { name: 'CAN' },
    { name: 'BLE' },
    { name: 'Wi-Fi' },
    { name: 'Zigbee' },
    { name: 'LoRaWAN' },
    { name: 'MQTT' },
    { name: 'Keil' },
    { name: 'IAR' },
    { name: 'GCC' },
    { name: 'PlatformIO' },
    { name: 'Eclipse' },
    { name: 'Segger J-Link' },
  ];

  const AppTile: React.FC<{ name: string }> = ({ name }) => (
    <li className="px-8 py-4 mx-4 rounded-lg shadow-md bg-white whitespace-nowrap text-black">
      {name}
    </li>
  );

  const renderTiles = (apps: any[]) => (
    <ul className="flex items-center">
      {apps.map((app, idx) => (
        <AppTile key={idx} name={app.name} />
      ))}
    </ul>
  );

  return (
    <section className="py-16 bg-white md:bg-gray-50 mt-10 md:mt-0">
      <div className="container mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold">
            Technologies We Work With
          </h2>
        </div>

        {/* Row 1 */}
        <div className="pl-1 pr-1 md:pl-2 md:pr-2 lg:pl-35 lg:pr-20">
          <Marquee direction="right" speed={40} pauseOnHover gradient={false}>
            {renderTiles(row1Apps)}
            {renderTiles(row1Apps)}
          </Marquee>
        </div>

        {/* Row 2 */}
        <div className="pl-1 pr-1 md:pl-2 md:pr-2 lg:pl-35 lg:pr-20 mt-6">
          <Marquee direction="left" speed={40} pauseOnHover gradient={false}>
            {renderTiles(row2Apps)}
            {renderTiles(row2Apps)}
          </Marquee>
        </div>

        {/* Row 3 */}
        <div className="pl-1 pr-1 md:pl-2 md:pr-2 lg:pl-35 lg:pr-20 mt-6">
          <Marquee direction="right" speed={40} pauseOnHover gradient={false}>
            {renderTiles(row3Apps)}
            {renderTiles(row3Apps)}
          </Marquee>
        </div>


      </div>
    </section>
  );
};

export default ScrollingAppsShowcase;