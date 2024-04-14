
 <template>
    <div class="starfox-page">

  
      <h1>Project StarFox</h1>
  
      <p>
        The launch of Project StarFox marks a significant milestone for our organization. This project aims to design, build, and test a liquid-fueled engine demonstrator. Led by a dedicated team manager and chief engineer, the Feed, Thrust Chamber Assembly (TCA), and Electronics departments will collaboratively explore the feasibility of this project, progressing to the design and construction phase. The inaugural engine ignition is anticipated by the end of 2023.
      </p>
  
      <h2>Project Goals</h2>
      <ul>
        <li>Develop expertise in liquid-fueled engine technology.</li>
        <li>Gain valuable experience in engine design, fabrication, and testing.</li>
        <li>Lay the groundwork for future development of high-performance rocket engines.</li>
        <li>Contribute to the advancement of Czech rocketry and space exploration.</li>
      </ul>

      <UBreadcrumb class="mb-3" :links="links">
        <template #default="{ link, isActive, index }">
          <UBadge :color="isActive ? 'primary' : 'gray'" class="rounded-full truncate">
            {{ index + 1 }}. {{ link.label }}
          </UBadge>
        </template>
      </UBreadcrumb>
  
      <h2>Team Structure</h2>
      <p>Project StarFox will leverage the combined skills and expertise of several key departments:</p>
  
      <UTable :headers="teamHeaders" :rows="teamMembers" />
  
      <h2>Project Timeline</h2>
      <div class="timeline">
        <div class="timeline-item">
          <h3 class="timeline-item-title">Feasibility Study (Q1 2023)</h3>
          <p>Initial research, analysis, and evaluation of the project.</p>
        </div>
        <div class="timeline-item">
          <h3 class="timeline-item-title">Design and Development (Q2-Q3 2023)</h3>
          <p>Detailed design of the engine demonstrator and component fabrication.</p>
        </div>
        <div class="timeline-item">
          <h3 class="timeline-item-title">Assembly and Testing (Q4 2023)</h3>
          <p>Integration of components, engine assembly, and initial testing procedures.</p>
        </div>
        <div class="timeline-item">
          <h3 class="timeline-item-title">Engine Ignition (December 2023)</h3>
          <p>The anticipated date for the first successful ignition of the engine demonstrator.</p>
        </div>
      </div>
  
      <UProgress :value="70" indicator />
      <p>Project Progress: 70% (as of April 14, 2024)</p>
  
      <a href="#" class="button">Stay Updated</a>
    </div>
    <Timeline :timeline-events="state.events"/>

  </template>

<script setup>
  // get the timeline events from the API
  const teamHeaders = [
        { key: 'name', label: 'Name' },
        { key: 'department', label: 'Department' },
        { key: 'role', label: 'role' }]
  const teamMembers = [
        {
          name: 'John Novak',
          department: 'Feed',
          role: 'Lead Engineer',
        },
        {
          name: 'Anna Petrova',
          department: 'TCA',
          role: 'Design Engineer',
        },
        {
          name: 'Marek Svoboda',
          department: 'Electronics',
          role: 'Controls Engineer',
        }]

  const links = [
        { label: 'Prepare' },
        { label: 'Fire' },
        { label: 'Launch' },
      ]
  const state = reactive({
        events: []
    })
  async function fetchData() {
      try {
        const eventRaw = await $fetch('/api/events', {
          method: 'GET'
        });
        const event = JSON.parse(eventRaw.body);
        state.events = event;
      } catch (error) {
        console.error(error);
      }
    }
    
  
  state.events = fetchData();
</script>

<style scoped>
.starfox-page {
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

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}

ul {
  list-style: disc;
  padding-left: 20px;
  margin-bottom: 15px;
}

.timeline {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.timeline-item {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.timeline-item-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.u-progress {
  margin-bottom: 10px;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
}
</style>
