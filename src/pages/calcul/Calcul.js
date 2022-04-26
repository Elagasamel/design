import React from 'react';
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import './Calcul.css';

function Calcul() {
  const history = useHistory();
  function handleClick(path) {
    history.push(path);
  }
  return (
    <div className="Calcul">
       
        <div className="d-grid gap-2">         
          <form>
            <Button variant="primary" size="lg"  onClick={() => history.push('/calcul/lambda')}>Click button to view Amazon Lambda </Button>
            <Button variant="btn btn-warning" size="lg" onClick={() => handleClick('/calcul/EC2')}>Click button to view Instance EC2</Button>
 
    </form>
        </div>
      </div>
  )
}export default  Calcul;