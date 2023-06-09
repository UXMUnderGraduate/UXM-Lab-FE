import React from 'react';

interface FormProps {
  title: string;
  nameKr?: string;
  nameEn?: string;
  affiliation?: string;
  isAlumni?: string;
  researchField?: string;
  company?: string;
  contents?: string;
  year?: string;
  author?: string;
  publisher?: string;
  publishedDate?: string;
  extraAddress?: string;
  img?: string;
  imgUrls?: string;
}

const Form: React.FC<FormProps> = (props) => {
  return (
    <div className="w-full flex justify-center mt-10">
      <form className="w-1/2 bg-gray-300 flex flex-col p-5 rounded-md space-y-2">
        <input placeholder={props.title} className="w-full rounded-sm py-2 px-4" />
        {props.nameKr && <input placeholder={props.nameKr} className="w-full rounded-sm py-2 px-4" />}
        {props.nameEn && <input placeholder={props.nameEn} className="w-full rounded-sm py-2 px-4" />}
        {props.affiliation && <input placeholder={props.affiliation} className="w-full rounded-sm py-2 px-4" />}
        {props.isAlumni && (
          <select placeholder={props.isAlumni} className="w-full rounded-sm py-2 px-4">
            <option value={'true'}>true</option>
            <option value={'false'}>false</option>
          </select>
        )}
        {props.researchField && <input placeholder={props.researchField} className="w-full rounded-sm py-2 px-4" />}
        {props.company && <input placeholder={props.company} className="w-full rounded-sm py-2 px-4" />}
        {props.contents && <input placeholder={props.contents} className="w-full rounded-sm py-2 px-4" />}
        {props.year && <input placeholder={props.year} className="w-full rounded-sm py-2 px-4" />}
        {props.author && <input placeholder={props.author} className="w-full rounded-sm py-2 px-4" />}
        {props.publisher && <input placeholder={props.publisher} className="w-full rounded-sm py-2 px-4" />}
        {props.publishedDate && <input placeholder={props.publishedDate} className="w-full rounded-sm py-2 px-4" />}
        {props.extraAddress && <input placeholder={props.extraAddress} className="w-full rounded-sm py-2 px-4" />}
      </form>
    </div>
  );
};

export default Form;
