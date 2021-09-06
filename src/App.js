import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Modal from './components/Modal';

function App() {
  const [isModalVisible, setIsModalVisible] = useState();

  const showModal = () => {
    setIsModalVisible(true);
  }

  const handleSubmit = () => {
    setIsModalVisible(false);
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  }

  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <main className="main">
        <Button onClick={showModal} type="primary">
          Open Modal
        </Button>
        <Modal title="What is Lorem Ipsum?" visible={isModalVisible} onSubmit={handleSubmit} onCancel={handleCancel}>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </Modal>
      </main>
    </div>
  );
}

export default App;
