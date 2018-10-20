import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub335Component} from "./stub335.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub335Component
        }])
    ],
    declarations: [
        Stub335Component
    ]
})
export class Stub335Module {

}
