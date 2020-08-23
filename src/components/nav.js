import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const Nav = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleSearch">Search</Label>
        <Input
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="search placeholder"
          onChange={(e) => {props.inputChange(e)}}
        />
      </FormGroup>
    </Form>
  );
}

export default Nav;