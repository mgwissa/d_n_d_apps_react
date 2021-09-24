import React from 'react';

import NumberField from '../formTypes/NumberField';
import "./PrayerBeads.css"

const PrayerBeads = () => {
    return (
        <div>
            <h2>Necklace of Prayer Beads</h2>
            <img class="prayer-beads-img" src="necklace_of_prayer_beads.jpeg" alt="Necklace of Prayer Beads" />
            <div class="form-field">
                <label className="field-label">curing:</label>
                <NumberField />
            </div>
            <div class="form-field">
                <label className="field-label">blessing:</label>
                <NumberField />
            </div>
            <div class="form-field">
                <label className="field-label">smiting:</label>
                <NumberField />
            </div>
            <div class="form-field">
                <label className="field-label">favor:</label>
                <NumberField />
            </div>
            <div class="form-field">
                <label className="field-label">summons:</label>
                <NumberField />
            </div>
        </div>
    )
}

// curing - 1 
// blessing - 1 
// smiting - 0
// favor - 1
// favor - 0
// summons - 1

export default PrayerBeads