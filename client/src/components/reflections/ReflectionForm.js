import { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { ReflectionConsumer } from '../../providers/ReflectionProvider';

const ReflectionForm = ({ addReflection }) => {
    const [reflection, setReflection] = useState({ summary: "", did_right: "", do_better: ""  })


const handleSubmit = (e) => {
    e.preventDefault()
    addReflection(reflection)
    setReflection({ summary: "", did_right: "", do_better: "" })
}

return(
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Summary of Experience</Form.Label>
            <Form.Control
                placeholder="Ex: Overall good experience, but not a good fit."
                type="text"
                name="summary"
                value={reflection.summary}
                onChange={(e) => setReflection({...reflection, summary: e.target.value})} />
        </Form.Group>
    
        <Form.Group>
            <Form.Label>What I did great</Form.Label>
            <Form.Control
                placeholder="Ex: I interviewed well.  Connected well with CIO."
                type="text"
                name="did_right"
                value={reflection.did_right}
                onChange={(e) => setReflection({...reflection, did_right: e.target.value})} />
        </Form.Group>   
        <Form.Group>
            <Form.Label>What I can do better</Form.Label>
            <Form.Control
                placeholder="Needed to polish some python before the whiteboard."
                type="text"
                name="do_better"
                value={reflection.do_better}
                onChange={(e) => setReflection({...reflection, do_better: e.target.value})} />
        </Form.Group> 
        <Button type='submit'>Done</Button>   
    </Form>

)
}

const ConnectedReflectionForm = (props) => (
    <ReflectionConsumer>
        { value => (
            <ReflectionForm {...props} {...value} />
        )}
    </ReflectionConsumer>
)


export default ReflectionForm;