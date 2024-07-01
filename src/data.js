import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg  from './assets//jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPT = [
    {
        image: componentsImg,
        title: 'Components',
        description: 'The core UI building block - compose the user interface by combining multiple components'
    },
    {
        image: jsxImg,
        title: 'JSX',
        description: 'The core UI building block - compose the user interface by combining multiple components'
    },
    {
        image: propsImg,
        title: 'Props',
        description: 'The core UI building block - compose the user interface by combining multiple components'
    },
    {
        image: stateImg,
        title: 'State',
        description: 'The core UI building block - compose the user interface by combining multiple components'
    }

]

export const EXAMPLES = {
    components: {
        title:'Components',
        description:'Components are the building blocks of react',
        code: `
        function Welcome() {
            return <h1>Hello, world!</h1>
        }
        `,
    },
    jsx: {
        title:'JSX',
        description:'JSX are the building blocks of react',
        code: `
        function Welcome() {
            return <h1>Hello, world!</h1>
        }
        `,
    },
    props: {
        title:'Props',
        description:'Props are the building blocks of react',
        code: `
        function Welcome() {
            return <h1>Hello, world!</h1>
        }
        `,
    },
    state: {
        title:'State',
        description:'State are the building blocks of react',
        code: `
        function Welcome() {
            return <h1>Hello, world!</h1>
        }
        `,
    }
}