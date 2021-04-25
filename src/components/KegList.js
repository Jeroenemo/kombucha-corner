import React from "react";
import { Accordion, Card, ProgressBar, Button } from "react-bootstrap";
import Keg from "./Keg";
import KegDetails from "./KegDetails"
import PropTypes from "prop-types";

export default function KegList(props){

  return (
    <>
      { props.kegList.map((keg) =>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <Keg
                  whenKegClicked = { props.onKegSelection }
                  name = { keg.name }
                  brand = { keg.brand }
                  price = { keg.price }
                  flavor = { keg.flavor }
                  quantity = { keg.quantity }
                  id = { keg.id }
                  key = { keg.id } />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <KegDetails
                  keg={keg}
                  onClickingDelete={props.handleDeletingKeg}
                  onClickingEdit={props.handleEditingKeg}
                  onClickingDecrement={props.handleDecrementingKeg} />  
              <ProgressBar now={keg.quantity * (100 / 124)} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      )}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};