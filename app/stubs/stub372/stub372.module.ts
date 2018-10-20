import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub372Component} from "./stub372.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub372Component
        }])
    ],
    declarations: [
        Stub372Component
    ]
})
export class Stub372Module {

}
