import { Button, Form } from "semantic-ui-react";

function CreateUser(props) {
  return (
    <Form>
        <Form.Field inline>
            <input placeholder="Username" name="username" onChange={props.onChange} value={props.username} ref={props.nameInput} />
        </Form.Field>
        <Form.Field inline>
            <input placeholder="Ailas" name="ailas" onChange={props.onChange} value={props.ailas} />
        </Form.Field>
        <Button color="blue" onClick={props.onSubmit}>생성하기</Button>
    </Form>
  );
}

export default CreateUser;