import React from 'react'

const CalculatorContent = () => {
    return (
        <div className="cal-bg">
            <div className="row m-5">
                <div className="col-md-4 box-bg">
                    <h3>
                        Calculate mortgage payments
                    </h3>
                    <label for="inputEmail4" class="form-label">Price of property</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                    <label for="inputEmail4" class="form-label">Down payment</label>
                    <div className="row">
                        <div className="col-3">
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-primary">$</button>
                                <button type="button" class="btn btn-outline-primary">%</button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="input-group">
                                <input type="text" aria-label="First name" class="form-control" />
                            </div>
                        </div>
                        <div className="col-3">
                            <div class="input-group">
                                <input type="text" aria-label="First name" class="form-control" />
                            </div>
                        </div>
                    </div>
                    <label for="inputEmail4" class="form-label mt-3">Mortgage amount</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                    <div className="row">
                        <div className="col-md-6">
                            <label for="inputEmail4" class="form-label">Interest rate</label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" class="form-label">Amortization</label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                    </div>
                    <label for="inputEmail4" class="form-label">Payment frequency</label>
                    <select class="form-select" id="inputEmail4">
                        <option>Monthly</option>
                        <option>Bionthly</option>
                        <option>Every 2 weeks</option>
                        <option>Weekely</option>
                    </select>
                    <div class="d-grid gap-2 col-12 mt-3 mx-auto">
                        <button class="btn btn-primary" type="button">Calculate</button>
                    </div>
                    <label for="inputEmail4" class="form-label">Payment amount</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                    <div class="d-grid gap-2 col-12 mt-3 mx-auto">
                        <button class="btn btn-primary" type="button">Monthly Payment Chart</button>
                    </div>
                </div>
                <div className="col-md-4 box-bg">
                    <h3>
                        Estimated property transfer tax
                    </h3>
                    <label for="inputEmail4" class="form-label">Municipality</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                    <label for="inputEmail4" class="form-label">Price of property</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                    <label for="inputEmail4" class="form-label">Municipal assessment total</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                    <div class="d-grid gap-2 col-12 mt-3 mx-auto">
                        <button class="btn btn-primary" type="button">Calculate</button>
                    </div>
                    <label for="inputEmail4" class="form-label mt-3">Estimated property transfer tax</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-4 box-bg">
                    <h3>
                        Calculate borrowing capacity
                    </h3>
                    <label for="inputEmail4" class="form-label">Payment amount</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                    <label for="inputEmail4" class="form-label">Payment frequency</label>
                    <select class="form-select" id="inputEmail4">
                        <option>Monthly</option>
                        <option>Bionthly</option>
                        <option>Every 2 weeks</option>
                        <option>Weekely</option>
                    </select>
                    <div className="row">
                        <div className="col-md-6">
                            <label for="inputEmail4" class="form-label">Interest rate</label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" class="form-label">Amortization</label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                    </div>
                    <div class="d-grid gap-2 col-12 mt-3 mx-auto">
                        <button class="btn btn-primary" type="button">Calculate</button>
                    </div>
                    <label for="inputEmail4" class="form-label mt-3">Mortgage amount</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                </div>
            </div>
        </div>
    )
}

export default CalculatorContent
