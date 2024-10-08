import React from 'react';
import PropTypes from 'prop-types';

const CardDataStats = ({ children, total, title, levelUp, levelDown, rate }) => {
    return (
        <div className="rounded-sm border border-stroke bg-white py-6 px-7 shadow-md ">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100">
                {children}
            </div>

            <div className="mt-4 flex items-end justify-between">
                <div>
                    <h4 className="text-title-md font-bold text-black ">
                        {total}
                    </h4>
                    <span className="text-sm ">{title}</span>
                </div>

                <span
                    className={`flex items-center gap-1 text-sm font-medium ${levelUp && 'text-meta-3'
                        } ${levelDown && 'text-meta-5'} `}
                >
                    {rate}

                    {levelUp && (
                        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <style>
                            {".cls-1 { fill: none; }"}
                          </style>
                        </defs>
                        <path d="M20,8v2h6.5859L18,18.5859,13.707,14.293a.9994.9994,0,0,0-1.414,0L2,24.5859,3.4141,26,13,16.4141l4.293,4.2929a.9994.9994,0,0,0,1.414,0L28,11.4141V18h2V8Z" stroke='green' />
                        <rect width="32" height="32" fill="none" />
                      </svg>
                    )}
                    {levelDown && (
                        <div >
                            <svg
                                fill="#000000"
                                width="20px"
                                height="20px"
                                viewBox="0 0 24 24"
                                id="down-trend-left-round"
                                data-name="Flat Line"
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon flat-line"
                            >
                                <path
                                    id="primary"
                                    d="M3,17l6.79-6.79a1,1,0,0,1,1.42,0l2.58,2.58a1,1,0,0,0,1.42,0L21,7"
                                    style={{
                                        fill: "none",
                                        stroke: "red", // Changed to red
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                    }}
                                />
                                <polyline
                                    id="primary-2"
                                    data-name="primary"
                                    points="3 13 3 17 7 17"
                                    style={{
                                        fill: "none",
                                        stroke: "red", // Changed to red
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                    }}
                                />
                            </svg>
                        </div>
                    )}
                </span>
            </div>
        </div>
    );
};

CardDataStats.propTypes = {
    children: PropTypes.node.isRequired,
    total: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    levelUp: PropTypes.bool,
    levelDown: PropTypes.bool,
    rate: PropTypes.string.isRequired,
}

export default CardDataStats;