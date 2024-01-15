import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "chair",
          img: "chair.jpeg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "chairs",
          price: "50",
        },
        {
          id: 2,
          title: "table",
          img: "table.jpeg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "tables",
          price: "150",
        },
        {
          id: 3,
          title: "sofa",
          img: "sofa.jpeg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "sofas",
          price: "500",
        },
        {
          id: 4,
          title: "armchair",
          img: "armchair.jpeg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "armchairs",
          price: "200",
        },
        {
          id: 5,
          title: "mirror",
          img: "mirror.jpeg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "mirrors",
          price: "100",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };

    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wraper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
