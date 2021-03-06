import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Bars = () => (
  <section className="bars tracker-container">
    <h2 className="data-header">Summary</h2>
    <div className="flex-container">
      <div className="bar flex-container">
        <CircularProgressbar value={5} maxValue={15} text="33%" strokeWidth={15} styles={buildStyles({ strokeLinecap: 'butt' })} />
        <h3>Calories</h3>
      </div>
      <div className="bar flex-container">
        <CircularProgressbar value={5} maxValue={15} text="33%" strokeWidth={15} styles={buildStyles({ strokeLinecap: 'butt' })} />
        <h3>Protein</h3>
      </div>
      <div className="bar flex-container">
        <CircularProgressbar value={5} maxValue={15} text="33%" strokeWidth={15} styles={buildStyles({ strokeLinecap: 'butt' })} />
        <h3>Carbohydrates</h3>
      </div>
      <div className="bar flex-container">
        <CircularProgressbar value={5} maxValue={15} text="33%" strokeWidth={15} styles={buildStyles({ strokeLinecap: 'butt' })} />
        <h3>Fats</h3>
      </div>
      <div className="bar flex-container">
        <CircularProgressbar value={5} maxValue={15} text="33%" strokeWidth={15} styles={buildStyles({ strokeLinecap: 'butt' })} />
        <h3>Fiber</h3>
      </div>
    </div>
  </section>
);

export default Bars;
