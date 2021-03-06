import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Bars = () => (
  <section className="bars tracker-container">
    <h1 className="data-header">Summary</h1>
    <div className="flex-container">
      <div className="bar flex-container">
        <CircularProgressbar value={5} maxValue={15} text="33%" strokeWidth={15} styles={buildStyles({ strokeLinecap: 'butt' })} />
        <h2>Calories</h2>
      </div>
      <div className="bar flex-container">
        <CircularProgressbar value={5} maxValue={15} text="33%" strokeWidth={15} styles={buildStyles({ strokeLinecap: 'butt' })} />
        <h2>Protein</h2>
      </div>
      <div className="bar flex-container">
        <CircularProgressbar value={5} maxValue={15} text="33%" strokeWidth={15} styles={buildStyles({ strokeLinecap: 'butt' })} />
        <h2>Carbohydrates</h2>
      </div>
      <div className="bar flex-container">
        <CircularProgressbar value={5} maxValue={15} text="33%" strokeWidth={15} styles={buildStyles({ strokeLinecap: 'butt' })} />
        <h2>Fats</h2>
      </div>
      <div className="bar flex-container">
        <CircularProgressbar value={5} maxValue={15} text="33%" strokeWidth={15} styles={buildStyles({ strokeLinecap: 'butt' })} />
        <h2>Fiber</h2>
      </div>
    </div>
  </section>
);

export default Bars;
