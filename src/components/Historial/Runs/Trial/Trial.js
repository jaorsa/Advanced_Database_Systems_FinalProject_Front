export default LatestRuns = () => {
  return (
    <div class={classes.wrapper}>
      {/* <h2>
        <strong>
          All Games<span>( 4 )</span>
        </strong>
      </h2>

      <div class={classes.cards}>
        <figure class={classes.card}>
          <img src="https://mrreiha.keybase.pub/codepen/hover-fx/1.jpg" />

          <figcaption>Dota 2</figcaption>
        </figure>

        <figure class={classes.card}>
          <img src="https://mrreiha.keybase.pub/codepen/hover-fx/2.jpg" />

          <figcaption>Stick Fight</figcaption>
        </figure>

        <figure class={classes.card}>
          <img src="https://mrreiha.keybase.pub/codepen/hover-fx/3.jpg" />

          <figcaption>Minion Masters</figcaption>
        </figure>

        <figure class={classes.card}>
          <img src="https://mrreiha.keybase.pub/codepen/hover-fx/4.jpg" />

          <figcaption>KoseBoz!</figcaption>
        </figure>
      </div> */}

      <h2>
        <strong>What's new?</strong>
      </h2>

      <div class={classes.news}>
        <figure class={classes.article}>
          <img src="https://mrreiha.keybase.pub/codepen/hover-fx/news1.jpg" />

          <figcaption>
            <h3>New Item</h3>

            <p>
              In today’s update, two heads are better than one, and three heads
              are better than that, as the all-new Flockheart’s Gamble Arcana
              item for Ogre Magi makes its grand debut.
            </p>
          </figcaption>
        </figure>

        <figure class={classes.article}>
          <img src="https://mrreiha.keybase.pub/codepen/hover-fx/news2.png" />

          <figcaption>
            <h3>Update</h3>

            <p>
              Just in time for Lunar New Year and the Rat’s time in the cyclical
              place of honor, the Treasure of Unbound Majesty is now available.
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};
