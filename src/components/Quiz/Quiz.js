import React, { Component } from 'react'
import ListUser from "../Time";
import Question from "../Question";
import Time from "../ListTask"
export default class Quiz extends Component {
    render() {
        return (
            <div className="Content"> 
              <div className="row">
                
                 <Time/>
                  <Question/>
                  <ListUser/>
              </div>
          </div>
        )
    }
}
