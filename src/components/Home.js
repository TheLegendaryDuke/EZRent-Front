import React, { Component } from 'react'
import '../css/home.css'

export default class Home extends Component {
    render() {
        return (
            <div className="accordion">
                <section id="tenant">
                    <h2><a href="#tenant">I'm looking for a place</a></h2>
                    <div>
                        {/*<form action={"/mal"} method="get">*/}
                            {/*<!--This should be a search-bar with autocomplete-->*/}
                            {/*<div class="input-field">*/}
                                {/*<input name="city" class="autocomplete" id="autocomplete-input" type="text" />*/}
                                {/*<label for="autocomplete-input">Enter a city</label>*/}
                            {/*</div>*/}
                            {/*<input type="submit" value="go"/>*/}
                        {/*</form>*/}
                    </div>
                </section>
                <section id="landlord">
                    <h2><a href="#landlord">I have a place for rent</a></h2>
                    <div>
                        <a href="/profile">Go</a>
                    </div>
                </section>
            </div>
        );
    }
}