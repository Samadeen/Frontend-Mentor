import styles from './Results.module.scss';
import profile from '../../assets/Oval.png';
import locationIcon from '../../assets/icon-location.svg';
import companies from '../../assets/icon-company.svg';
import twitter from '../../assets/icon-twitter.svg';
import website from '../../assets/icon-website.svg';

export interface DataProps {
  login: string;
  avatar_url: string;
  name: string;
  company: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string | null;
  created_at: string;
  twitter_username: string | null;
  location: string | null;
  blog: string;
}

interface ResultsProps {
  data: DataProps;
}

const Results: React.FC<ResultsProps> = ({ data }) => {
  const {
    login,
    avatar_url,
    bio,
    company,
    created_at,
    followers,
    following,
    name,
    public_repos,
    twitter_username,
    location,
    blog,
  }: DataProps = data;

  const dateStr: string = created_at;
  const date: Date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formattedDate: string = date.toLocaleDateString('en-US', options);

  return (
    <section className={styles.results_container}>
      <img
        src={avatar_url ? avatar_url : profile}
        alt='profile picture'
        className={styles.profile_img}
      />
      <div className={styles.results}>
        <div className={styles.results_details}>
          <div className={styles.results_details_name}>
            <h2>{name ? name : 'The Octocat'}</h2>
            <p>@{login ? login : 'octocat'}</p>
          </div>
          <p>{created_at ? formattedDate : 'Joined 25 Jan 2011'}</p>
        </div>
        <div className={styles.bio}>
          <p>
            {bio
              ? bio
              : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.'}
          </p>
        </div>
        <div className={styles.repo}>
          <div className={styles.num}>
            <p>Repos</p>
            <h3>{public_repos ? public_repos : 8}</h3>
          </div>
          <div className={styles.num}>
            <p>Followers</p>
            <h3>{followers ? followers : 3938}</h3>
          </div>
          <div className={styles.num}>
            <p>Following</p>
            <h3>{following ? following : 9}</h3>
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.group}>
            <img src={locationIcon} alt='location icon' />
            <p>
              {location === null
                ? 'None'
                : location
                ? location
                : 'San Francisco'}
            </p>
          </div>
          <div className={styles.group}>
            <img src={twitter} alt='location icon' />
            <p>{twitter_username ? twitter_username : 'Not Available'}</p>
          </div>
          <div className={styles.group}>
            <img src={website} alt='location icon' />
            <a
              href={blog === '' ? '' : blog ? blog : 'https://github.blog'}
              target='_blank'
            >
              {blog === '' ? 'None' : blog ? blog : 'https://github.blog'}
            </a>
          </div>
          <div className={styles.group}>
            <img src={companies} alt='location icon' />
            <p>{company === null ? 'None' : company ? company : '@github'}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
