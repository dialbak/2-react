import React from 'react';
import './App.css';
import {Greet} from "./components/props/Greet";
import {Person} from "./components/props/Person";
import PersonList from "./components/props/PersonsList";
import {Status} from "./components/props/Status";
import {Heading} from "./components/props/Heading";
import {Oscar} from "./components/props/Oscar";
import {Button} from "./components/props/Button";
import {Input} from "./components/props/Input";
import {Container} from "./components/props/Container";
import {ThemeContextProvider} from "./components/context/ThemeContext";
import {Box} from "./components/context/Box";
import {UserContextProvider} from "./components/context/UserContextProvider";
import {User} from "./components/context/User";
import {DomRef} from "./components/refs/DomRef";
import {MutableRef} from "./components/refs/MutableRef";
import {Counter} from "./components/class/Counter";
import {List} from "./components/generics/List";
import {Toast} from "./components/templateliterals/Toast";
import { CustomButton } from './components/html/Button';
import {RandomNumber} from "./components/restriction/RandomNumber";
import {Text} from "./components/polymorphic/Text";

function App() {
    const personName = {
        first: 'Bruce',
        last: 'Wayne'
    }
    const nameList = [
        {
            first: 'Bruce',
            last: 'Wayne'
        }, {
            first: 'Clark',
            last: 'Kent'
        }, {
            first: 'Princess',
            last: 'Diana'
        }
    ]
    const items = [
        {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
        },
        {
            id: 2,
            first: 'Clark',
            last: 'Kent'
        },
        {
            id: 3,
            first: 'Princess',
            last: 'Diana'
        }
    ];

    return (
        <div className="App">
            <Greet name="Bak" isLoggedIn={false}/>
            <Person name={personName}/>
            <PersonList names={nameList}/>
            <Status status={'loading'}/>
            <div className={'container'}>
                <Heading children={'Placeholder text'}/>
                <Heading>Heading</Heading>
            </div>
            <Heading>Oscar goes to Dicaprio</Heading>
            <Oscar>
                <Button handleClick={(event, id) => {
                    console.log('Button  clicked', event, id)
                }}/>
            </Oscar>
            <div>
                <Input value='' handleChange={event => console.log(event.target.value)}/>
            </div>
            <Container styles={{marginTop: '5px', color: 'red'}}/>
            <ThemeContextProvider>
                <Box/>
            </ThemeContextProvider>
            <UserContextProvider>
                <User/>
            </UserContextProvider>
            <DomRef/>
            <MutableRef/>
            <Counter message={"The count value is "}/>
            <List
                items={items}
                handleClick={items => console.log(items)}
            />
            <Toast position={'center'}/>
            <CustomButton
                variant='primary'
                onClick={() => console.log('Clicked')}
            >
                Button Label
            </CustomButton>
            <RandomNumber value={10} isPositive/>
            <Text size='lg' as='h1'>
                Heading
            </Text>
            <Text size='md' as='p'>
                Paragraph
            </Text>
            <Text size='sm' color='secondary' as='label' htmlFor='someId'>
                Label
            </Text>
        </div>
    );
}

export default App;





























