class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleHello = () => {
      const message = this.createChatBotMessage("Bonjour ! Je suis Energo, votre chatbot. Mon objectif est de vous aider à découvrir des idées pour améliorer l'urbanisme tout en facilitant votre participation. Souhaitez-vous commencer ? ");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
        
      }));
    };


    handleJaw = () => {
      const message = this.createChatBotMessage(
        "D'accord, je vais vous poser quelques questions pour comprendre quel type d'améliorations vous souhaitez pour votre ville ! Tout d'abord...:\n" +
        "Quels types d'améliorations aimeriez-vous pour rendre votre ville plus durable ?\n" +
        "Option 1 : Espaces verts et parcs\n" +
        "Option 2 : Solutions de transport durable (ex : pistes cyclables, transports publics électriques)\n" +
        "Option 3 : Bâtiments écologiques et économes en énergie"
      );
      
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
        
      }));
    };

    handleOp2 = () => {
      const message = this.createChatBotMessage("Génial ! 45 % des personnes soutiennent cette idée. !  ");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
        
      }));
    };
    handleEspace = () => {
      const message = this.createChatBotMessage("Les parcs urbains augmentent la biodiversité et offrent des espaces de détente. Souhaitez-vous voter pour la création de nouveaux parcs dans votre ville ?  ");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
        
      }));
    };


    handleEspace2 = () => {
      const message = this.createChatBotMessage("sure , ! Voici une idée pour améliorer votre ville : 'Créer plus de zones piétonnes pour réduire la pollution.' Souhaitez-vous soutenir cette idée ?  \n Option 1 : Oui, je soutiens cette idée.  \n o Option 2 : Non, je préfère une autre solution.   ");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
        
      }));
    };

    handleEspace3 = () => {
      const message = this.createChatBotMessage( "Quel est votre plus grand souci concernant votre ville ?  o Option 1 : Trop de circulation o Option 2 : Manque de nature o Option 3 : Problèmes de gestion des déchets  ");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
        
      }));
    };


    handleCirculation = () => {
      const message = this.createChatBotMessage( "Pour réduire la circulation, vous pourriez soutenir la création de zones sans voitures ");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
        
      }));
    };
    handleNature = () => {
      const message = this.createChatBotMessage( "Augmenter les espaces verts en intégrant des jardins urbains et des toits végétalisés. ");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
        
      }));
    };

    handleHowAreYou = () => {
        const message = this.createChatBotMessage("Je vais bien, merci de demander ! Mon énergie est entièrement consacrée à vous aider aujourd'hui, toujours prête à répondre à vos questions. 😊 Et vous, comment se passe votre journée ?");
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      };

      handleServices = () => {
        const message = this.createChatBotMessage("Nous offrons une gamme de services de gestion de l'énergie, comprenant des audits énergétiques, du conseil en efficacité énergétique, des solutions d'énergie renouvelable et la surveillance énergétique en temps réel.");
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      };
      handleContact = () => {
        const message = this.createChatBotMessage("Vous pouvez contacter notre service client en appelant le [+21623507648], en nous envoyant un email à [4inatechnology@gmail.com] ou en utilisant la fonctionnalité de chat sur notre site web.");
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      };

      handleEfficiencyConsulting = () => {
        const message = this.createChatBotMessage("Notre service de conseil en efficacité énergétique comprend une revue complète de votre consommation d'énergie, des recommandations pour des améliorations, ainsi qu'une assistance dans la mise en œuvre de mesures d'économie d'énergie..");
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      };
      handleRenewableEnergy = () => {
        const message = this.createChatBotMessage("Nous proposons des solutions d'énergie renouvelable, telles que l'installation de panneaux solaires, pour vous aider à réduire votre empreinte carbone et vos coûts énergétiques.");
    
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      };

      handleBilling = () => {
        const message = this.createChatBotMessage("Vous pouvez payer votre facture en ligne via notre site web, par courrier ou en configurant des paiements automatiques par l'intermédiaire de votre banque. Nous acceptons divers moyens de paiement, y compris les cartes de crédit/débit, les virements bancaires et les chèques électroniques.");
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      };
      handleOutage = () => {
        const message = this.createChatBotMessage("En cas de panne de courant, veuillez contacter votre fournisseur local d'électricité. Pour toute assistance supplémentaire, vous pouvez contacter notre équipe de support.");
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      };
      handleScheduleConsultation = () => {
        const message = this.createChatBotMessage("Vous pouvez planifier une consultation en nous appelant au [numéro de téléphone], en envoyant un email à [adresse email], ou en remplissant le formulaire de demande sur notre site web.");
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));

      };

      // handleDefault = () => {
      //   const message = this.createChatBotMessage("I'm not sure how to help with that. Can you please provide more details or ask a different question?");
      //   this.setState((prev) => ({
      //     ...prev,
      //     messages: [...prev.messages, message],
      //   }));
      // };
  

  }
  
  export default ActionProvider;
  