import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="my-5">
                <h1 className='text-center'>Contact Us</h1>
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form action="">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">FUll NAME</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
                                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter your mobile number" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">EMAIL</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="example@gmail.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-outline-primary" type="submit">Submit form</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;