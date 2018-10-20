import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub162Component} from "./stub162.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub162Component
        }])
    ],
    declarations: [
        Stub162Component
    ]
})
export class Stub162Module {

}
