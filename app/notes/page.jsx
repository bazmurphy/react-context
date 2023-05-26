export default function Notes() {
  return (
    <div className="notes-container">
      <h4>Is Context a State Manager? </h4>
      <p>
        Context can manage state but it is not a state manager. A state manager
        is a library that is specifically built to manage state it's highly
        opinionated about how you structure that state how you request that
        state how you mutate it both synchronously and asynchronously and it
        makes sure that when you have a state change only the components that
        actually reference that particular piece of the state get updated and
        all of that can be done in context but isn't out of the box and that's
        the big value of a state manager is all that comes out of the box for
        you.
      </p>
      <h4>When Context Updates Components</h4>
      <p>
        A common misconception about context is that anything from the context
        provider down re-renders on any context change. That's not actually the
        case it's only when your component actually uses that particular context
        that it will get updated but again i mean that could be a lot of
        subscribers. So anything that changes about the context is going to
        force a context update.
      </p>
      <h4>Recommendations</h4>
      <p>
        When it comes to react context it's really good for slow moving data
        that you're going to put up globally things like theme and user the kind
        of things where when it changes everything is going to redraw anyway so
        it doesn't really matter. If it's high velocity data at the top level
        that might be a problem depending on the number of subscribers. Again
        remember that when context changes only the things that depend on it
        actually get updated so it may or may not be an issue but that is
        something to think about when it comes to context. Now you can also use
        context at the local level within a couple of small components way down
        deep in the tree and i think that's very good no problem there at all
        when it comes to state managers i do recommend using state managers when
        you are on a team and you want standards and things like redux and mobx
        are a lot easier to pr because there's a right way and a wrong way to
        write those and you also get that runtime benefit of having the
        selectors where it's pretty easy to understand that when this changes
        only that's going to change so i think when it comes to large teams
        that's when a state manager is really going to be beneficial now when it
        comes to app shells and microfront ends i do have a specific
        recommendation there and that is to use context for that and that's
        because i think you should have a very small footprint of data in that
        space the current user the api access jot and then maybe enough to drive
        the header or things like a card count you really don't want to put in a
        lot of global state and when you have a state manager you're tempted to
        potentially have a very large state footprint inside of the shell itself
        when the shell really should have just the minimal amount of data that's
        required to run all of the sub-components and get them all you know
        talking together and that would again include user the user jot and
        maybe some small pieces of global data
      </p>
    </div>
  );
}
