import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Bars = () => (
  <section className="bars tracker-container">
    <h2 className="data-header">Summary</h2>
    <div className="flex-container">
      <div className="bar flex-container">
        <CircularProgressbar value={5} maxValue={15} text="33%" strokeWidth={15} styles={buildStyles({ strokeLinecap: 'butt' })} />
        <p>Calories</p>
      </div>
      <div className="bar flex-container">
        <CircularProgressbar value={5} maxValue={15} text="33%" strokeWidth={15} styles={buildStyles({ strokeLinecap: 'butt' })} />
        <p>Protein</p>
      </div>
      <div className="bar flex-container">
        <CircularProgressbar value={5} maxValue={15} text="33%" strokeWidth={15} styles={buildStyles({ strokeLinecap: 'butt' })} />
        <p>Carbohydrates</p>
      </div>
      <div className="bar flex-container">
        <CircularProgressbar value={5} maxValue={15} text="33%" strokeWidth={15} styles={buildStyles({ strokeLinecap: 'butt' })} />
        <p>Fats</p>
      </div>
      <div className="bar flex-container">
        <CircularProgressbar value={5} maxValue={15} text="33%" strokeWidth={15} styles={buildStyles({ strokeLinecap: 'butt' })} />
        <p>Fiber</p>
      </div>
    </div>
  </section>
);

export default Bars;
