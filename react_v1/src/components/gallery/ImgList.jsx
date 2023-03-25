import React from 'react';
import ImgCard from './ImgCard';
// import SkeletonElement from '../ui/SkeletonElement';
// import axios from 'axios';

const dummy = [
  {
    id: 1,
    title: 'What is Lorem Ipsum?',
    img: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    id: 2,
    title: 'Why do we use it?',
    img: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    id: 3,
    title: 'Where does it come from?',
    img: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    id: 4,
    title: 'Where can I get some?',
    img: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    id: 5,
    title: 'The standard Lorem Ipsum passage, used since the 1500s',
    img: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    id: 6,
    title: 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
    img: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    id: 7,
    title: '1914 translation by H. Rackham',
    img: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    id: 7,
    title: '1914 translation by H. Rackham',
    img: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
];

// const getData = async () => {
//   try {
//     const response = await axios.get(`${process.env.REACT_APP_URL}/api/images`);
//     console.log(response.data);
//   } catch (err) {
//     console.log('error >>>', err);
//   }
// };
export default function ImgList() {
  // useEffect(() => {
  //   getData();
  // }, []);
  // const [profile, setProfile] = useState(null);

  // useEffect(() => {
  //   setTimeout(async () => {
  //     console.log('load');
  //     const res = await axios.get(`${process.env.REACT_APP_URL}/api/images`);
  //     const data = await res.data;
  //     console.log(data);
  //     setProfile(data);
  //   }, 5000);
  // }, []);

  return (
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="card-container">
        <div class="grid-wrapper">
          {dummy &&
            dummy.map((item) => {
              return <ImgCard key={item.id} id={item.id} title={item.title} img={item.img} description={item.description} />;
            })}
        </div>
        {/* {!profile && (
          <div className="w-60 grid">
            <SkeletonElement />
            <SkeletonElement />
            <SkeletonElement />
            <SkeletonElement />
          </div>
        )} */}
      </div>
    </div>
  );
}
