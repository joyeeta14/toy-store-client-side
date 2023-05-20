// import React from 'react';

const Rating = () => {
    return (
        <div>
            <div className="text-center pb-5">
                <h3 className="text-xl font-medium">We would love to hear your feedback !</h3>
            </div>
            <div className="text-center">
                <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* <!-- Page content here --> */}
                        <label htmlFor="my-drawer-4" className="drawer-button btn rounded-full btn-info 
                        btn-outline">Give Feedback</label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 border border-l-teal-200 bg-blue-200 text-base-content">
                            {/* <!-- Sidebar content here --> */}
                            <p>
                                It will be great if you rate us according to your experience.We would try to improve ourself.Have faith on us and lets make it till the end.
                            </p>
                            <div>
                                <div className="rating pt-4">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rating;