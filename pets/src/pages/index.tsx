import type { NextPage } from 'next';
import Title from '../ui/components/Title/Title';
import List from '../ui/components/List/List';

const Home: NextPage = () => {
  return (
    <div>
      <Title 
        title="" 
        subtitle={<span>
          Com um pequeno valor mensal, você <br />
          pode <strong>adotar um pet virtualmente</strong>
        </span>} />
        <List 
          pets={[
            {
              id: 1,
              name: 'Bidu',
              description: 'Praesentium atque sint mollitia quaerat totam!',
              image: 'https://th.bing.com/th/id/R.42295b49d8065cd26f8490d3c364f6d6?rik=qtNikr9j9vQfeQ&pid=ImgRaw&r=0&sres=1&sresct=1'
            },
            {
              id: 2,
              name: 'Bidu',
              description: 'Praesentium atque sint mollitia quaerat totam hiahoh fhaoifhf a  aoihfiae  haihfeoihfe  heiohaihefoeihohaehg hiehoaehifheaohg a hioheoghheoahgoeihg hioaehgoehaogho hofiahe uhfuehfhe  fheohfaefh euahuofhueohfauoh heauohfouheauohfueah hfahfhueaohfoah!',
              image: 'https://th.bing.com/th/id/R.42295b49d8065cd26f8490d3c364f6d6?rik=qtNikr9j9vQfeQ&pid=ImgRaw&r=0&sres=1&sresct=1'
            }
          ]}
        />
    </div>
  )
}

export default Home
