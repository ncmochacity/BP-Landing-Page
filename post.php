<?php
      $mailTo = "admin@reply.com";
      $mailFrom = "no-reply@admin.com";
      $selection = $_POST["selection"];
      $message = "someone selected a gift card.";

      mail($mailTo, $selection, $message, "From: ".$mailFrom);
      echo  $selection;
  ?>
