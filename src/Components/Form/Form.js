import { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { toast } from 'react-toastify';
import { actions} from '../../redux';
import ImageNotFound from 'static/image/not_found.jpg'
import s from './form.module.css';
import { Button } from 'Components/Button';

export default function Form() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
    
    const data = {
        id: shortid.generate(),
        title,
        description,
        image: ImageNotFound,
    };

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        return;
    }
    };
    
  const handleSubmit = event => {
      event.preventDefault();
      if (data.title === '') {
          toast.error("Input dish title. Please!")
          return
      } else if (data.description === '') {
          toast.error("Input dish description. Please!")
          return
      }
    dispatch(actions.favourites(data));
    reset();
  };

  const reset = () => {
    setTitle('');
    setDescription('');
  };

  return (
    <div className={s.background}>
      <h2 className={s.title}>Add custom dish</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
            type="text"
            value={title}
            placeholder="Dish title"
            onChange={handleChange}
            name="title"
            className={s.input}
          />
        <textarea
            type="text"
            placeholder="Dich description"
            value={description}
            rows="5"
            onChange={handleChange}
            name="description"
            className={s.input}
              />
        <div className={s.button}>
            <Button title="Add custom dish"/>
        </div>
        
      </form>
    </div>
  );
}