<script lang="ts">
 import alexis from "$lib/assets/images/profile-pictures/alexis-pantoja.jpg";
import emily from "$lib/assets/images/profile-pictures/emily-zhang.png";
import nicole from "$lib/assets/images/profile-pictures/nicole-loonstyn.png";
import caroline from "$lib/assets/images/profile-pictures/caroline-eldringhoff.jpeg";
import christian from "$lib/assets/images/profile-pictures/christian-pecoraro.jpg";
const teamMembers : { name: string; image: string; bio: string }[] = [
  {
    name: "Emily Zhang",
    image: emily,
    bio: "Emily Zhang graduated from George Washington University with a Bachelor of Arts in Criminal Justice and double minor in International Affairs and Law and Society and founded BBTB in 2021. Emily’s research and service work aims to raise awareness to the hidden issue of children of incarcerated parents and establish practical means of support. Her extensive research has shown that incarcerated parents are the best means for voluntary and confidential identification of these children to facilitate support."
  },
  {
    name: "Alexis Pantoja",
    image: alexis,
    bio: "Alexis Pantoja is a George Washington University graduate, majoring in Criminal Justice and minoring in Biology. She is currently a paralegal at a public interest firm in DC that specializes in civil rights and environmental law. Her primary roles at BBTB are creating additional resource references for both incarcerated parents we serve and their children and coordinating services for BBTB families. As a former CIP, she has firsthand knowledge of how our criminal justice system can strain familial bonds. She hopes BBTB and these books can help other families grapple with these issues and repair relationships."
  },
  {
    name: "Nicole Loonstyn",
    image: nicole,
    bio: "Nicole Loonstyn is currently getting her MS in Criminology and Criminal Justice at Northeastern University and works full-time in the reentry space, supporting formerly incarcerated people in Massachusetts with state-wide resources. She has spent years in different criminal legal spaces to help protect and uplift the voices of justice-impacted individuals and their families through direct services, outreach, and research. As a former COIP, she has helped to advance BBTB’s goals of supporting children of incarcerated parents, providing resources, and destigmatizing familial incarceration for over three years"
  },
  {
    name: "Caroline Eldringhoff",
    image: caroline,
    bio: "Caroline Eldringhoff is a marketing and communications professional who supports Building Bonds Through Books through outreach coordination and program research. Having begun her work with BBTB in 2021 as a student at George Washington University, Caroline has witnessed the organization’s outreach and impact grow to new heights. After graduating with her bachelor’s degree in Communications and English in 2025, she hopes to continue strengthening and advancing the mission of Building Bonds Through Books. Caroline brings a strong background in nonprofit communications and marketing and is deeply passionate about using it to foster connection, empowerment, and equity for individuals and families impacted by the incarceration system. She feels incredibly grateful and privileged to work alongside such a dedicated and passionate team."
  },
  {
    name: "Christian Pecoraro",
    image: christian,
    bio: "Christian is currently a second year student at the Rowan-Virtua School of Osteopathic Medicine, but has been a member of Building Bonds Through Books since his undergraduate days at the George Washington University. Christian has been working to combine his passion for medicine with his love of service to make a meaningful impact in his community. Outside of school and BBTB, Christian enjoys soccer, music, and loves to cook!"
  }  
];
</script>
<h1 class="text-3xl text-(--bbtb-foreground) font-bold my-4 text-center">Our Team</h1>
{#each teamMembers as member}
  <div class="team-member flex flex-col lg:flex-row items-center justify-center">
    <img src={member.image} alt={member.name} class="team-member-image" />

    <div>
    <h2 class="team-member-name">{member.name}</h2>
    <p class="team-member-bio">{member.bio}</p>
    </div>
  </div>
{/each}

<style lang=postcss>
    .team-member {
        margin-bottom: 2rem;
        text-align: center;
    }  
    
    .team-member-image {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 1rem;
    }
    
    .team-member-name {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
    
    .team-member-bio {
        font-size: 1rem;
        color: #555;
        max-width: 600px;
        margin: 0 auto;
    }

    @media (min-width: 1024px) {
        .team-member:nth-of-type(even) {
        flex-direction: row-reverse;
        } 

        .team-member-image {
            margin-right: 2rem;
            margin-bottom: 0;
        }
    }
</style>