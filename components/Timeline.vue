<template>
    <div class="element">
      <h1 class="text-3xl">Events</h1>
      <ul class="timeline">
        <li v-for="event in timelineEvents" :key="event.id">
          <span></span>
          <div class="data">
            <div class="event-date">{{ event.date }}</div>
            <div class="event-title">{{ event.title }}</div>
            <div class="event-description">{{ event.description }}</div>
          </div>
        </li>
      </ul>
    </div>
  </template>

<script>
export default {
    props: {
        timelineEvents: {
            type: Array,
            required: true,
            default: () => [
                { id: 1, date: '2022-01-01', title: 'Event 1', description: 'Description of Event 1' },
                { id: 2, date: '2022-02-01', title: 'Event 2', description: 'Description of Event 2' },
                { id: 3, date: '2022-03-01', title: 'Event 3', description: 'Description of Event 3' }
            ]
        }
    }
};
</script>

<style scoped>
/* Add your custom styles here */

.data{
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    transition-duration: .5s;
    transition: .5s ease-in-out;
}
.data:hover{
    color: white;
    border-radius: 5px;
    margin-left: 2rem;
}
.data::after {
    transition-duration: 1s;
    content: "";
    display: flex;
    width: 0px;
    height: 2px;
    top: 3.1rem;
    left: 0;
    position: absolute;
    background-color: transparent;
}
.data:hover::after{
    transition-duration: 1s;
    content: "";
    display: flex;
    width: 30px;
    height: 2px;
    top: 3.1rem;
    left: 0;
    position: absolute;
    background-color: white;
}
.element{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: #181818;
    flex-direction: column;
}
.event-date {
    font-weight: bold;
}
.event-title {
    font-size: 18px;
}
.event-description {
    margin-bottom: 10px;
}
.timeline{
    padding: 3rem;
    list-style-type: none;
    padding: 0;
    margin-left: 3rem;
}
.timeline li{
    padding-top: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    padding: .5rem;
    text-align: left;
    align-items: flex-start;
    margin-top: 1rem;
}

.timeline li::before{
    z-index: 2;
    position: absolute;
    left: -10%;
    top: 2.5rem;
    content: "";
    display: flex;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
}

.timeline li::after{
    z-index: 0;
    position: absolute;
    left: calc(-10% + 10px); ;
    top: 3rem;
    content: "";
    display: flex;
    width: 2px;
    height: 8rem;
    background-color: white;
}
.timeline li span{
    z-index: 1;
    position: absolute;
    left: -11%;
    top: 2.2rem;
    content: "";
    display: flex;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-repeat: repeat;
    background-color: #181818;
}
</style>