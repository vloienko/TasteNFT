import React, { useState, useRef } from 'react';
import './ModalContent.scss';

const ImageUploader = () => {
   const [imagePreview, setImagePreview] = useState(null);
   const [imageName, setImageName] = useState('file.name'); // Значення за замовчуванням
   const [imageSize, setImageSize] = useState('0.00'); // Значення за замовчуванням
   const inputRef = useRef(null); // Реф для доступу до input поля

   const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         setImageName(file.name); // Встановлюємо назву файлу
         setImageSize((file.size / (1024 * 1024)).toFixed(2)); // Встановлюємо розмір файлу в MB
         const reader = new FileReader();
         reader.onloadend = () => {
            setImagePreview(reader.result);
         };
         reader.readAsDataURL(file);
      }
   };

   const handleDeleteImage = () => {
      setImagePreview(null);
      setImageName('file.name'); // Значення за замовчуванням
      setImageSize('0.00'); // Значення за замовчуванням
      // Очищення значення поля input і його оновлення
      inputRef.current.value = '';
   };

   return (
      <div className="edit-profile__field image">
         <label htmlFor="image">Profile image</label>
         <div className="file-image height-big">
            <div className="file-image__item">
               <div className="file-image__circle">
                  <input
                     ref={inputRef}
                     id="image"
                     type="file"
                     accept=".jpg, .png"
                     onChange={handleImageChange}
                     onClick={(e) => e.target.value = null} // Очищення значення поля input при кліку (за допомогою ref)
                  />
                  <div className="file-image__button"></div>
                  <div className="file-image__preview">
                     {imagePreview && <img src={imagePreview} alt="Preview" />}
                  </div>
               </div>
               <div className="file-image__info">
                  <div className="file-image__name">{imageName}</div> {/* Відображаємо назву */}
                  <div className="file-image__size">{imageSize} mb</div> {/* Відображаємо розмір */}
                  {imagePreview && ( /* Відображаємо кнопку видалення, якщо фото обране */
                     <button className="file-image__delete" onClick={handleDeleteImage}>delete file</button>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default ImageUploader;
