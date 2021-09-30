import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
  }


    addSomeButter = () => {
      this.setState({items:[ ...this.state.items, {id: 5, value: "Butter", qty:5 }]})
    }

    addSomeFish = () => {
      this.setState({items:[ ...this.state.items, {id: 5, value: "Fish", qty:1 }]})
    }

    addSomeRice = () => {
      this.setState({items:[ ...this.state.items, {id: 5, value: "Rice", qty:3 }]})
    }

    addSomePotatoes = () => {
      this.setState({items:[ ...this.state.items, {id: 5, value: "Potatoes", qty:7 }]})
    }

    addSomeFood = (foodDescription, quantity) => {
      return () => {
        const searchResult = this.state.items.findIndex((element, index, array) => {
          if(element.value === foodDescription){
            return true;
          } else{
            return false;
          }
        });

        if(searchResult !== -1) {
          console.log("SUCCESS");
          let newItems = [...this.state.items];
          newItems[searchResult].qty += quantity;

          this.setState({items: newItems});
        } else{
          console.log("NOT FOUND");
          this.setState({
            items:
            [...this.state.items,
            {
              id: this.state.items.length+1,
              value: foodDescription,
              qty: quantity
            }
          ]
          });
        }
        
      }
    }


  
  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={this.addSomeFood("Butter", 5) }>Butter </button>
      <button onClick={this.addSomeFood("Rice", 2) }>Rice </button>
      <button onClick={this.addSomeFood("Fish", 1) }>Fish </button>
      <button onClick={this.addSomeFood("Potatoes", 7) }>Potatoes </button>

    </div>
  }
}

export default App;