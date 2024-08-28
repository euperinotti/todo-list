import { AboutItem } from "../../components/AboutItem";
import { PageTitle } from "../../components/PageTitle";
import { BaseTemplate } from "../../template/Base";

export const AboutPage = () => {
  return (
    <BaseTemplate>
      <PageTitle title="About the creator" />
      <div className="flex gap-8 w-full">
        <img
          className="w-64 h-64 rounded-full object-cover border-2 border-slate-600"
          src="https://github.com/euperinotti.png"
          alt="Profile picture"
        />
        <div className="flex flex-col gap-4 w-full">
          <AboutItem title="Name" description="Guilherme Perinotti" />
          <AboutItem title="Job" description="Fullstack Developer" />
          <AboutItem
            title="Biography"
            description="I love resolving problems. I am always in search of knowledge and
              ways to put into practice the knowledge I have acquired. I am
              currently pursuing higher education at Centro Universitário
              Fundação Assis Gurgacz, where I have also been working as a Full
              Stack developer since 2023.
            "
          />
          <AboutItem title="Github">
            <a
              href="https://github.com/euperinotti"
              className="text-sky-500 text-lg m-0 underline"
            >
              euperinotti
            </a>
          </AboutItem>
        </div>
      </div>
    </BaseTemplate>
  );
};
