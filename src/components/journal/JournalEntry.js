import React from 'react';
import moment from 'moment';
import 'moment/locale/es';

export const JournalEntry = ({id, date, title, body, url}) => {

    let noteDate = moment(date);
    noteDate.locale('es');

    return (
        <div className="journal__entry pointer">
            {
                url &&            
                <div 
                    className="journal__entry-picture"
                    style={{
                        backgroundSize:'cover',
                        backgroundImage: `url(${url})`
                    }}
                ></div>
            }
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    { title }
                </p>
                <p className="journal__entry-content">
                    { body }
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>{ noteDate.format('ddd') }</span>
                <h4>{ noteDate.format('D') }</h4>
            </div>
        </div>
    )
}
