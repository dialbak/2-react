import {
    ErrorExample,
    UseStateBasics,
    UseStateArray,
    UseStateObject,
    UseStateCounter,
    UseEffectBasics,
    UseEffectCleanup,
    UseEffectFetchData,
    MultipleReturns,
    ShortCircuit,
    ShowHide,
    ControlledInputs,
    MultiplesInputs,
    Filters,
    UseRefBasics,
    UseReducer,
    PropDrilling,
    UseContextApi,
    CustomHook,
    PropTypesExample,
    ReactRouterExample,
    UseMemoCallback,
    HooksFlow,
    LocalStorageUseEffect,
} from "./tutorial"

const App = () => {
    return (
        <div className="container">
            <ControlledInputs/>
            <MultiplesInputs/>
            <Filters/>
        </div>
    );
}

export default App;
