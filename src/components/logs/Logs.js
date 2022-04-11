import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import { nanoid } from 'nanoid';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';

const Logs = ({ log: {logs, loading} }) => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []);

    const getLogs = async () => {
        setLoading(true);
        const res = await fetch('/logs');
        const data = await res.json();

        setLogs(data);
        setLoading(false);
    }
    if(loading) {
        return <Preloader />
    }
    return (
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (
                <p className='center'>No logs to show...</p>
            ) : (
                logs.map(log => <li key={nanoid(4)}>{<LogItem log={log} key={log.id}/>}</li>)
            )}
        </ul>
    )
};

const mapStateToProps = state => ({
    log: state.log
})

export default connect(mapStateToProps)(Logs)