<template>
    <div class="about-rocket-team">
      <h1>About Our Rocket Development Team</h1>
      <p>
        We are a passionate group of students driven by a shared dream of reaching for the stars. Fueled by curiosity and a thirst for knowledge, we strive to push the boundaries of aerospace engineering by building our own rockets. Visit our website at https://czechrockets.com/ to learn more about our projects and initiatives.
      </p>
  
      <div class="departments">
        <UCard v-for="department in departments" :key="department.name">
          <template #header>
            <h2>{{ department.title }}</h2>
          </template>
          <p>{{ department.description }}</p>
          <template #footer>
            <a href="https://czechrockets.com/" target="_blank" rel="noopener noreferrer">Learn More at Czech Rocket Society</a>
          </template>
        </UCard>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        departments: [
          {
            name: 'avionics',
            title: 'Avionics Department',
            description:
              'The brains behind the brawn! Our Avionics Department designs and implements the electronic systems that control our rockets. From flight computers and navigation systems to telemetry and data acquisition, they ensure our rockets fly with cutting-edge technology. They also develop software for onboard processing and communication, allowing us to monitor and control our rockets in real-time.',
          },
          {
            name: 'propulsion',
            title: 'Solid Propulsion Department',
            description:
              'The Solid Propulsion Department is the engine room of our operations. These engineers and chemists work tirelessly to design, test, and manufacture the solid rocket motors that power our vehicles. They research and develop innovative propellants and combustion techniques to achieve maximum thrust and efficiency. Their expertise ensures our rockets have the power they need to reach new heights.',
          },
          {
            name: 'structures',
            title: 'Structures Department',
            description:
              'The unsung heroes! The Structures Department is responsible for designing and constructing the lightweight yet incredibly strong airframe that forms the core of our rockets. They use advanced materials and design techniques to ensure our rockets can withstand the extreme forces experienced during launch, ascent, and atmospheric re-entry. Their meticulous work allows us to build rockets that are both efficient and reliable.',
          },
          {
            name: 'recovery',
            title: 'Recovery Systems Department',
            description:
              'Bringing it all back home safely! The Recovery Systems Department develops and implements reliable mechanisms for safely recovering our rockets after launch. They design parachutes, drogue chutes, and other aerodynamic braking systems to slow our rockets down during descent and ensure a soft landing. Their ingenuity allows us to reuse valuable components and data for future missions.',
          },
          {
            name: 'payload',
            title: 'Payload Department',
            description:
              'The scientists at heart! The Payload Department integrates scientific experiments and payloads into our rockets. They collaborate with researchers from various fields, from astrophysics and meteorology to biology and engineering, to design and build payloads that address a wide range of scientific questions. Their work allows us to contribute to advancements in space exploration and research.',
          },
        ],
      }
    },
  }
  </script>
  
  <style scoped>
  .about-rocket-team {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }
  
  p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 15px;
  }
  
  .departments {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .u-card {
    width: calc(33% - 20px);
    margin-bottom: 20px;
  }
  
  a {
    color: #007bff;
    text-decoration: none;
  }
  </style>
  