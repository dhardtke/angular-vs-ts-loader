import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub495Component} from "./stub495.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub495Component
        }])
    ],
    declarations: [
        Stub495Component
    ]
})
export class Stub495Module {

}
