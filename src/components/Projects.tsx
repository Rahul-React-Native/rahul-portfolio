import ios from "../assets/ios.png";
import android from "../assets/android.png";

export default function Projects() {
  const projects = [
    {
      name: "TimeCards AI",
      description: "Cross-platform employee attendance app.",
      ios,
      android,
      links: {
        appStore: "https://apps.apple.com/us/app/gt-card/id6739786745",
        playStore: "https://play.google.com/store/apps/details?id=com.geotimecard",
      },
    },
    {
      name: "TimeCards AI Personal",
      description: "Personal version of TimeCards AI.",
      ios,
      android,
      links: {
        appStore: "https://apps.apple.com/us/app/timecards-personal/id6743415483",
        playStore: "https://play.google.com/store/apps/details?id=com.geotimecard_personal",
      },
    },
    // Add Suzy One & Simu Agents similarly
  ];

  return (
    <section className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg text-white shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-yellow-400">Projects</h2>
      <div className="grid gap-8">
        {projects.map((p, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-lg">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">{p.name}</h3>
              <p className="mb-2">{p.description}</p>
              <p>
                <a href={p.links.appStore} className="text-blue-400 underline mr-2">App Store</a>
                <a href={p.links.playStore} className="text-green-400 underline">Play Store</a>
              </p>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <img src={p.ios} alt="iOS Screenshot" className="w-32 rounded shadow" />
              <img src={p.android} alt="Android Screenshot" className="w-32 rounded shadow" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
